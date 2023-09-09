'use client'

'use client'

import { ConfCurrentLocation } from '@/config/general'
import styles from './currentLocation.module.scss'

const CurrentLocation = () => {
    return (
        <div className={styles.location}>
            <div className={styles.title}>Current Location:</div>
            <div className={styles.text}>{ConfCurrentLocation}</div>
        </div>
    )
}

export default CurrentLocation