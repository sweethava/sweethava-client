import DefaultLayout from '@/components/layouts/defaultLayout/defaultLayout'
import type { Metadata } from 'next'
import '@/styles/variables.scss'
import '@/styles/global.scss'
import 'swiper/css'

export const metadata: Metadata = {
	title: 'Zhan Ilyas',
	description: 'My personal site',
	other: {
		'mailru-domain': 'zsvILXEQ6z6eVxiu'
	},
	viewport: {
		initialScale: 1,
		userScalable: false
	},
	icons: {
		icon: '/favicon/favicon.ico',
		apple: '/favicon/favicon.ico',
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<DefaultLayout>
					{children}
				</DefaultLayout>
			</body>
		</html>
	)
}
