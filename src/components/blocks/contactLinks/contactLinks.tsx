'use client'

import { ConfContactLinks } from '@/config/general'
import styles from './contactLinks.module.scss'
import Link from 'next/link'
import Button from '@/components/ui/button/button'
import { EFieldSizes, EFieldStyles } from '@/types/fields'

const ContactLinks = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.links}>
                {
                    ConfContactLinks.map((item, index) => {
                        const { title, link, icon } = item
                        return (
                            <Link href={link} target='_blank' key={index} className={styles.link}>
                                <Button
                                    text={title}
                                    square
                                    size={EFieldSizes.SMALLER}
                                    fieldStyle={EFieldStyles.OUTLINE}
                                    beforeIcon={icon}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ContactLinks