'use client'

import Link from 'next/link'
import styles from './logo.module.scss'
import { HiOutlineSparkles } from 'react-icons/hi'

const Logo = () => {
    return (
        <Link href='/' className={styles.logo}>
            <div className={styles.icon}>
                <HiOutlineSparkles />
            </div>
            <div className={styles.text}>Zhan Ilyas</div>
        </Link>
    )
}

export default Logo