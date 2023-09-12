'use client'

import clsx from 'clsx'
import styles from './defaultLayout.module.scss'
import { PropsWithChildren } from 'react'
import { InterFont } from '@/utils/fonts'
import DefaultHead from '../defaultHead/defaultHead'

const DefaultLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className={clsx(styles.root, InterFont.variable)}>
                {children}
            </div>
        </>
    )
}

export default DefaultLayout