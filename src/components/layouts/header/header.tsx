'use client'

import Container from '@/components/general/container/container'
import styles from './header.module.scss'
import Logo from '@/components/general/logo/logo'
import Button from '@/components/ui/button/button'
import { EFieldSizes } from '@/types/fields'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <Button
                        text='Contact Me'
                        size={EFieldSizes.SMALL}
                        square
                    />
                </div>
            </Container>
        </header>
    )
}

export default Header