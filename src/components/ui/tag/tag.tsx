'use client'

import { EFieldSizes, EFieldStyles } from '@/types/fields'
import styles from './tag.module.scss'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface TagProps {
    size?: EFieldSizes,
    fieldStyle?: EFieldStyles,
}

const Tag = ({ children, size = EFieldSizes.DEFAULT, fieldStyle = EFieldStyles.PRIMARY }: PropsWithChildren<TagProps>) => {
    const classes = clsx(styles.tag, styles[size], styles[fieldStyle])

    return (
        <div className={classes}>{children}</div>
    )
}

export default Tag