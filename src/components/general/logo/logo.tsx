'use client'

import Link from 'next/link'
import styles from './logo.module.scss'
import { useState } from 'react'

const Logo = () => {
    return (
        <Link href='/' className={styles.logo}>
            <div className={styles.letters}>Z<span>I</span></div>
        </Link>
    )
}

export default Logo