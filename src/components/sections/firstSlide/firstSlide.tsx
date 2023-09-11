'use client'

import Container from '@/components/general/container/container'
import styles from './firstSlide.module.scss'
import Subtitle from '@/components/general/subtitle/subtitle'
import { ConfAboutMe } from '@/config/about'
import ContactLinks from '@/components/blocks/contactLinks/contactLinks'
import FirstSlideScene from '@/three/scenes/firstSlideScene/firstSlideScene'
import ArticleBlock from '@/components/blocks/articleBlock/articleBlock'

const FirstSlide = () => {
    return (
        <section className={styles.section}>
            <div className={styles.scene}>
                <FirstSlideScene />
            </div>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <div className={styles.article}>
                            <ArticleBlock
                                subtitle="Let's get acquainted"
                                title='My name is Zhan Ilyas'
                                text={ConfAboutMe}
                            />
                        </div>
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