import localFont from 'next/font/local'
import { Cousine } from 'next/font/google'

export const CousineFont = Cousine({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mono',
})

export const MonaSansFont = localFont({
    variable: '--font',
    src: '../fonts/MonaSans[slnt,wdth,wght].woff2',
})