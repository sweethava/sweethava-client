'use client'

import { ConfSocial } from '@/config/general'
import styles from './socialLinks.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/button/button'
import { EFieldStyles } from '@/types/fields'

const SocialLinks = () => {
    const [links] = useState(ConfSocial)

    return (
        <div className={styles.social}>
            <div className={styles.links}>
                {
                    links.map((item, index) => {
                        const { icon, link } = item

                        return (
                            <Link href={link} target='_blank' className={styles.link} key={index}>
                                <Button
                                    fieldStyle={EFieldStyles.OUTLINE}
                                    icon={icon}
                                    square
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SocialLinks