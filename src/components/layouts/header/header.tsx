'use client'

import Container from '@/components/general/container/container'
import styles from './header.module.scss'
import Logo from '@/components/general/logo/logo'
import CurrentLocation from '@/components/blocks/header/currentLocation/currentLocation'
import ContactLinks from '@/components/blocks/header/contactLinks/contactLinks'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.location}>
                        <CurrentLocation />
                    </div>
                    <div className={styles.contacts}>
                        <ContactLinks />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header