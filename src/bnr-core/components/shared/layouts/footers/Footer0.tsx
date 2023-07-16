import React, { useState } from 'react'
import Link from 'next/link'

export default function Footer0() {

    const ano  = new Date().getFullYear();
    const nome = process.env.NEXT_PUBLIC_BNRJC_SITE_NOME

    return (
        <div>
            <footer>
                {/* <footer className="bg-gradient-to-r from-marca-200 to-marca-800"> */}
                <div className="max-w-screen-xl text-gray-700">
                    <p className="text-sm text-center p-10">
                        Copyright &copy; { ano } | { nome } <Link href="/login"><svg className="inline h-4 w-4"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="5" y="11" width="14" height="10" rx="2" />  <circle cx="12" cy="16" r="1" />  <path d="M8 11v-4a4 4 0 0 1 8 0v4" /></svg></Link>
                    </p>
                </div>
            </footer>
        </div>
    )
}