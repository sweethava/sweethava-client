'use client'

import Container from '@/components/general/container/container'
import styles from './firstSlide.module.scss'
import Subtitle from '@/components/general/subtitle/subtitle'
import { ConfAboutMe } from '@/config/about'
import ScrollDown from '@/components/general/scrollDown/scrollDown'

const FirstSlide = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <div className={styles.subtitle}>
                            <Subtitle>Let's get acquainted</Subtitle>
                        </div>
                        <div className={styles.title}>Zhan Ilyas</div>
                        <div className={styles.text}>{ConfAboutMe}</div>
                    </div>
                    <div className={styles.scrollDown}>
                        <ScrollDown />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FirstSlide