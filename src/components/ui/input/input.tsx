'use client'

import { FC } from 'react'
import styles from './input.module.scss'
import { EFieldSizes, EFieldStyles } from "@/types/fields"
import clsx from 'clsx'
import { IMaskInput } from 'react-imask'
import { MaskOptions } from '@/types/mask'

interface InputProps {
    value?: string,
    placeholder?: string,
    name?: string,
    onChange?: (value: string) => any,
    onBlur?: (value: string) => any,
    size?: EFieldSizes,
    fieldStyle?: EFieldStyles,
    beforeIcon?: JSX.Element,
    afterIcon?: JSX.Element,
    type?: string,
    error?: boolean,
    center?: boolean,
    smallPadding?: boolean,
    mono?: boolean,
    mask?: MaskOptions
}

const Input: FC<InputProps> = ({ value = '', placeholder, name, onChange, onBlur, size = EFieldSizes.DEFAULT, fieldStyle = EFieldStyles.PRIMARY, beforeIcon, afterIcon, type = 'text', error = false, mono = false, center = false, smallPadding = false, mask }) => {
    const inputClasses = clsx({
        [styles.input]: true,
        [styles[size]]: true,
        [styles[fieldStyle]]: true,
        [styles.error]: error,
        [styles.mono]: mono,
        [styles.center]: center,
        [styles.smallPadding]: smallPadding,
    })

    const props = {
        value,
        placeholder,
        type,
        name
    }

    return (
        <div className={inputClasses}>
            {beforeIcon ? <span className={styles.icon}>{beforeIcon}</span> : null}

            {
                mask ?
                    <IMaskInput
                        {...props}
                        {...mask}
                        onAccept={(value: string) => {
                            onChange ? onChange(value) : null
                        }}
                    /> :
                    <input
                        {...props}
                        onChange={(e) => { onChange ? onChange(e.target.value) : null }}
                        onBlur={(e) => { onBlur ? onBlur(e.target.value) : null }}
                    />
            }

            {afterIcon ? <span className={styles.icon}>{afterIcon}</span> : null}
        </div>
    )
}
export default Input