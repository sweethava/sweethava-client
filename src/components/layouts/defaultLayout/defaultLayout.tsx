'use client'

import clsx from 'clsx'
import styles from './defaultLayout.module.scss'
import { PropsWithChildren } from 'react'
import { InterFont } from '@/utils/fonts'
import Header from '../header/header'

const DefaultLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className={clsx(styles.root, InterFont.variable)}>
                {/* <Header /> */}
                {children}
            </div>
        </>
    )
}

export default DefaultLayout