import '@/app/assets/styles/globals.scss'

import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
