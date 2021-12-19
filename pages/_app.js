import { UserProvider } from '@auth0/nextjs-auth0'

import '../styles/globals.css'
import Layout from '../comps/Layout'

import { ContextProvider } from '../context'

function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <ContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ContextProvider>
        </UserProvider>
        )
    }

export default MyApp
