'use client'

import Container from '@/components/general/container/container'
import styles from './conactMe.module.scss'
import ArticleBlock from '@/components/blocks/articleBlock/articleBlock'
import Link from 'next/link'
import { ConfEmail } from '@/config/general'
import Subtitle from '@/components/general/subtitle/subtitle'
import LinkHover from '@/components/general/linkHover/linkHover'
import SocialLinks from '@/components/blocks/socialLinks/socialLinks'
import AnimationRow from '@/components/animations/animationRow/animationRow'

const ContactMe = () => {
    return (
        <section className={styles.section}>
            <Container>
                <AnimationRow>
                    <div className={styles.inner}>
                        <div className={styles.subtitle}>
                            <Subtitle>Get in touch</Subtitle>
                        </div>
                        <LinkHover>
                            <Link href={`mailto:${ConfEmail}`} className={styles.email}>{ConfEmail}</Link>
                        </LinkHover>
                        <div className={styles.social}>
                            <SocialLinks />
                        </div>
                    </div>
                </AnimationRow>
            </Container>
        </section>
    )
}

export default ContactMe