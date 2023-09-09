import { FC, SyntheticEvent, forwardRef } from "react"
import styles from './button.module.scss'
import { EFieldSizes, EFieldStyles } from "@/types/fields"
import clsx from 'clsx'
import Link from "next/link"

interface ButtonProps {
    text?: string,
    size?: EFieldSizes,
    fieldStyle?: EFieldStyles,
    disabled?: boolean,
    full?: boolean,
    square?: boolean,
    icon?: JSX.Element,
    beforeIcon?: JSX.Element,
    afterIcon?: JSX.Element,
    link?: string,
    blur?: boolean,
    coloredIcon?: boolean,
    onClick?: (e: SyntheticEvent) => any
}

const Button = forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
    const { text, size = EFieldSizes.DEFAULT, fieldStyle = EFieldStyles.PRIMARY, full = false, square = false, onClick, beforeIcon, icon, afterIcon, disabled = false, link, blur, coloredIcon = false } = props
    const buttonClasses = clsx({
        [styles.btn]: true,
        [styles[size]]: true,
        [styles[fieldStyle]]: true,
        [styles.full]: full,
        [styles.square]: square,
        [styles.justIcon]: icon,
        [styles.blur]: blur,
        [styles.coloredIcon]: coloredIcon,
    })

    const content = (
        <div className={styles.inner}>
            {beforeIcon ? <span className={styles.icon}>{beforeIcon}</span> : null}
            {icon ? <span className={styles.icon}>{icon}</span> : null}
            {text ? <span className={styles.text}>{text}</span> : null}
            {afterIcon ? <span className={styles.icon}>{afterIcon}</span> : null}
        </div>
    )

    const inner = (
        <div className={styles.innerWrapper}>
            <div className={styles.staticInner}>{content}</div>
            <div className={styles.hoverInner}>{content}</div>
        </div>
    )

    if (link) {
        return (
            <div ref={ref}>
                <Link href={link} className={buttonClasses} onClick={onClick}>
                    {inner}
                </Link>
            </div>
        )
    } else {
        return (
            <div ref={ref}>
                <button className={buttonClasses} onClick={onClick} disabled={disabled}>
                    {inner}
                </button>
            </div>
        )
    }
})

export default Button