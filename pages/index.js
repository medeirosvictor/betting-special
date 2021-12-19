import React, {useContext} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Context } from '../context'

import { useRouter } from 'next/router'

import axios from 'axios'

export default function Auth() {
    const { setUsername, secSecret } = useContext(Context)

    return (
        <>
            <Head>
                <title>Betting Special | Home </title>
            </Head>
            <div className="home-container">
                Homepage
            </div>
        </>
    )
}
