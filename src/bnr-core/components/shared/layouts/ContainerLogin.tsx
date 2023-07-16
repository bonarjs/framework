import { ReactNode } from 'react'
import Head from 'next/head'

interface Props {
    children: ReactNode,
    title: ReactNode
}

export default function ContainerLogin({children, title}: Props) {
    return (
        <>
            <div>
                <Head>
                    <title>Bota na Rede - Login</title>
                </Head>
            </div>
        </>
    )
}