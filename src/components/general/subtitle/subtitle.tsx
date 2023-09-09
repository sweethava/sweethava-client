'use client'

import { PropsWithChildren } from 'react'
import styles from './subtitle.module.scss'
import { PiStarFourFill } from 'react-icons/pi'

const Subtitle = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.subtitle}>
            <div className={styles.icon}><PiStarFourFill /></div>
            <div className={styles.text}>{children}</div>
        </div>
    )
}

export default Subtitle