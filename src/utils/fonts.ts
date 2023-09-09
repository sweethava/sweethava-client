import localFont from 'next/font/local'
import { Cousine, Inter } from 'next/font/google'

export const CousineFont = Cousine({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mono',
})

export const InterFont = Inter({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font',
})