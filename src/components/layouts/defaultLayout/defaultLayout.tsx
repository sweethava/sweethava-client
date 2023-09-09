'use client'

import clsx from 'clsx'
import styles from './defaultLayout.module.scss'
import { PropsWithChildren } from 'react'
import { MonaSansFont } from '@/utils/fonts'
import Header from '../header/header'

const DefaultLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className={clsx(styles.root, MonaSansFont.variable)}>
                <Header />
                {children}
            </div>
        </>
    )
}

export default DefaultLayout