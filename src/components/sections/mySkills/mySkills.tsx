'use client'

import Container from '@/components/general/container/container'
import styles from './mySkills.module.scss'
import Subtitle from '@/components/general/subtitle/subtitle'
import SkillsGrid from '@/components/blocks/skillsGrid/skillsGrid'
import ArticleBlock from '@/components/blocks/articleBlock/articleBlock'
import { ConfMySkillsAbout } from '@/config/about'

const MySkills = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.header}>
                        <ArticleBlock
                            subtitle='My skills'
                            title='Technologies I use'
                            text={ConfMySkillsAbout}
                        />
                    </div>
                    <div className={styles.body}>
                        <SkillsGrid />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default MySkills