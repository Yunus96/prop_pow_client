import type { AppProps } from 'next/app'
import { AuthProvider } from '@propelauth/react'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider authUrl="https://72772615727.propelauthtest.com">
            <Component {...pageProps} />
        </AuthProvider>
    )
}
