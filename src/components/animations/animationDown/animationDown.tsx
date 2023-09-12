'use client'

import { ConfAnimations } from "@/config/general"
import { useInView, animated } from "@react-spring/web"
import { PropsWithChildren } from "react"

const AnimationDown = ({ children }: PropsWithChildren) => {
    if (ConfAnimations) {
        const [animRef, animStyles] = useInView(
            () => ({
                from: {
                    opacity: 0,
                    y: '4rem'
                },
                to: {
                    opacity: 1,
                    y: '0rem'
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

export default AnimationDown