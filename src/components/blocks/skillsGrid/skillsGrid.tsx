'use client'

import { useState } from 'react'
import styles from './skillsGrid.module.scss'
import { ConfMySkills } from '@/config/about'
import Image from 'next/image'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Link from 'next/link'
import AnimationScale from '@/components/animations/animationScale/animationScale'

const SkillsGrid = () => {
    const [skills] = useState(ConfMySkills)

    return (
        <div className={styles.grid}>
            {
                skills.map((item, index) => {
                    const { image, title, link } = item

                    if (link) {
                        return (
                            <AnimationScale key={index}>
                                <Link href={link} target='_blank' className={styles.item}>
                                    <div className={styles.icon}>
                                        <div className={styles.linkIcon}>
                                            <HiOutlineExternalLink />
                                        </div>
                                    </div>
                                    <div className={styles.title}>{title}</div>
                                </Link>
                            </AnimationScale>
                        )
                    } else {
                        return (
                            <AnimationScale key={index}>
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        {image ? <Image src={image.src} fill alt={title} /> : null}
                                    </div>
                                    <div className={styles.title}>{title}</div>
                                </div>
                            </AnimationScale>
                        )
                    }
                })
            }
        </div>
    )
}

export default SkillsGrid