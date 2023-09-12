'use client'

import { ConfAnimations } from "@/config/general"
import { useInView, animated } from "@react-spring/web"
import { PropsWithChildren } from "react"

const AnimationRow = ({ children }: PropsWithChildren) => {
    if (ConfAnimations) {
        const [animRef, animStyles] = useInView(
            () => ({
                from: {
                    opacity: 0,
                    scale: 0.8
                },
                to: {
                    opacity: 1,
                    scale: 1
                },
            }),
            {
                rootMargin: '-15% 0%',
            }
        )

        return (
            <animated.div
                ref={animRef}
                style={animStyles}
            >
                {children}
            </animated.div>
        )
    } else {
        return children
    }
}

export default AnimationRow