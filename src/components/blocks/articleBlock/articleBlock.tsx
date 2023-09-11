'use client'

import Subtitle from '@/components/general/subtitle/subtitle'
import styles from './articleBlock.module.scss'

interface ArticleBlockProps {
    subtitle?: string,
    title?: string,
    text?: string,
}

const ArticleBlock = ({ subtitle, text, title }: ArticleBlockProps) => {
    return (
        <div className={styles.article}>
            {subtitle ? <div className={styles.subtitle}><Subtitle>{subtitle}</Subtitle></div> : null}
            {title ? <div className={styles.title}>{title}</div> : null}
            {text ? <div className={styles.text}>{text}</div> : null}
        </div>
    )
}

export default ArticleBlock