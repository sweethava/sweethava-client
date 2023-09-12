'use client'

import { HiInformationCircle } from 'react-icons/hi'
import styles from './announcement.module.scss'
import { PropsWithChildren } from 'react'

const Announcement = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.announcement}>
            <div className={styles.icon}>
                <HiInformationCircle />
            </div>
            <div className={styles.text}>{children}</div>
        </div>
    )
}

export default Announcement