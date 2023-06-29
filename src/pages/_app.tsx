import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jakarta',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jakarta.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
