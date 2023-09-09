'use client'

import styles from './linkHover.module.scss'
import { PropsWithChildren } from 'react'

const LinkHover = ({ children }: PropsWithChildren) => {
    return (
        <span className={styles.link}>{children}</span>
    )
}

export default LinkHover