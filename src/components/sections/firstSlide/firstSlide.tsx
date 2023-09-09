'use client'

import Container from '@/components/general/container/container'
import styles from './firstSlide.module.scss'
import Subtitle from '@/components/general/subtitle/subtitle'
import { ConfAboutMe } from '@/config/about'
import ContactLinks from '@/components/blocks/contactLinks/contactLinks'
import FirstSlideScene from '@/three/scenes/firstSlideScene/firstSlideScene'

const FirstSlide = () => {
    return (
        <section className={styles.section}>
            <FirstSlideScene />
            <Container>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <div className={styles.subtitle}>
                            <Subtitle>Let's get acquainted</Subtitle>
                        </div>
                        <h1 className={styles.title}>My name is Zhan Ilyas</h1>
                        <div className={styles.text}>{ConfAboutMe}</div>
                        <div className={styles.links}>
                            <ContactLinks />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FirstSlide