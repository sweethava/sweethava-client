import { FaTelegramPlane, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { RiInstagramFill } from 'react-icons/ri'

export const ConfEmail = 'ilyasov.zhan@gmail.com'
export const ConfContactLinks = [
    {
        icon: <FaTelegramPlane />,
        title: 'Telegram',
        link: 'https://t.me/sweethava'
    },
    {
        icon: <FaLinkedinIn />,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/zhan-ilyas-1a0637250/'
    },
    {
        icon: <RiInstagramFill />,
        title: 'Me',
        link: 'https://www.instagram.com/sweethava/'
    },
    {
        icon: <HiOutlineMail />,
        title: 'Email',
        link: `mailto:${ConfEmail}`
    },
]
export const ConfSocial = [
    {
        icon: <FaTelegramPlane />,
        link: 'https://t.me/sweethava'
    },
    {
        icon: <FaLinkedinIn />,
        link: 'https://www.linkedin.com/in/zhan-ilyas-1a0637250/'
    },
    {
        icon: <RiInstagramFill />,
        link: 'https://www.instagram.com/sweethava/'
    },
    {
        icon: <FaGithub />,
        link: `https://github.com/ilyaszhan`
    },
]
export const ConfCVLink = 'https://docs.google.com/document/d/1rL6GRxpJRXfQF8TH3MiJOOEEO8bjZVQSe_pWS-IGsno/edit?usp=sharing'
export const ConfOpenToWork = true
export const ConfAnimations = false