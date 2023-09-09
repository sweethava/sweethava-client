'use client'

import styles from './scrollDown.module.scss'
import { HiArrowDown } from 'react-icons/hi'

const ScrollDown = () => {
    return (
        <div className={styles.scrollDown}>
            <div className={styles.icon}><HiArrowDown /></div>
            <div className={styles.text}>Scroll Down</div>
        </div>
    )
}

export default ScrollDown