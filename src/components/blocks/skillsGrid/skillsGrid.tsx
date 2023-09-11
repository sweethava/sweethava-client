'use client'

import { useState } from 'react'
import styles from './skillsGrid.module.scss'
import { ConfMySkills } from '@/config/about'
import Image from 'next/image'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Link from 'next/link'

const SkillsGrid = () => {
    const [skills] = useState(ConfMySkills)

    return (
        <div className={styles.grid}>
            {
                skills.map((item, index) => {
                    const { image, title, link } = item

                    if (link) {
                        return (
                            <Link href={link} target='_blank' className={styles.item} key={index}>
                                <div className={styles.icon}>
                                    <div className={styles.linkIcon}>
                                        <HiOutlineExternalLink />
                                    </div>
                                </div>
                                <div className={styles.title}>{title}</div>
                            </Link>
                        )
                    } else {
                        return (
                            <div className={styles.item} key={index}>
                                <div className={styles.icon}>
                                    {image ? <Image src={image.src} fill alt={title} /> : null}
                                </div>
                                <div className={styles.title}>{title}</div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default SkillsGrid