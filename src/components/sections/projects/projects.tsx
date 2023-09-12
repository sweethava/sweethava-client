'use client'

import Container from '@/components/general/container/container'
import styles from './projects.module.scss'
import ArticleBlock from '@/components/blocks/articleBlock/articleBlock'
import LatestProjects from '@/components/blocks/latestProjects/latestProjects'

const Projects = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.article}>
                        <ArticleBlock
                            subtitle='Hey look'
                            title='Some of my projects'
                        />
                    </div>
                    <div className={styles.projects}>
                        <LatestProjects />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Projects