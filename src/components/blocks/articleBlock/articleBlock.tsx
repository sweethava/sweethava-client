'use client'

import Subtitle from '@/components/general/subtitle/subtitle'
import styles from './articleBlock.module.scss'
import AnimationDown from '@/components/animations/animationDown/animationDown'

interface ArticleBlockProps {
    subtitle?: string,
    title?: string,
    text?: string,
}

const ArticleBlock = ({ subtitle, text, title }: ArticleBlockProps) => {
    return (
        <AnimationDown>
            <div className={styles.article}>
                {subtitle ? <div className={styles.subtitle}><Subtitle>{subtitle}</Subtitle></div> : null}
                {title ? <div className={styles.title}>{title}</div> : null}
                {text ? <div className={styles.text}>{text}</div> : null}
            </div>
        </AnimationDown>
    )
}

export default ArticleBlock