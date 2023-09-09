'use client'

import { ConfContactLinks } from '@/config/general'
import styles from './contactLinks.module.scss'
import Link from 'next/link'
import LinkHover from '@/components/general/linkHover/linkHover'

const ContactLinks = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.title}>Contact Me:</div>
            <div className={styles.links}>
                {
                    ConfContactLinks.map((item, index) => {
                        const { title, link } = item
                        return <Link href={link} target='_blank' key={index} className={styles.link}><LinkHover>{title}</LinkHover></Link>
                    })
                }
            </div>
        </div>
    )
}

export default ContactLinks