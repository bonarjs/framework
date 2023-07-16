import { useRouter } from 'next/router'
import Head from 'next/head'

import Footer0 from '../footers/Footer0'

import { ReactNode } from 'react'

import React, { useEffect, useState } from "react"

import TemplatesHeader0 from '../header/TemplatesHeader0'

interface Props {
    children: ReactNode
}

export default function Container0({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    /* Ajuste background-color do site */
    // const body = document.querySelector('body');
    // body?.classList.add('bnr-container-body');

    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const router = useRouter()

//   const { children, ...customMeta } = props;
  let meta = {
      name: process.env.NEXT_PUBLIC_BNRJC_SITE_NOME,
      description: process.env.NEXT_PUBLIC_BNRJC_SITE_DESCRICAO,
      title: process.env.NEXT_PUBLIC_BNRJC_SITE_TITULO,
      image: '/images/marca.png',
      type: 'website',
      domain: process.env.NEXT_PUBLIC_BNRJC_SITE_DOMINIO
  }

//   useEffect(() => {
//         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
//   });

  return (
      <div>
          <Head>
              <title>{meta.description}</title>
              <meta name="robots" content="follow, index" />
              <meta content={meta.description} name="description" />
              <meta property="og:url" content={`${meta.domain}${router.asPath}`} />
              <link rel="canonical" href={`${meta.domain}${router.asPath}`} />
              {/* <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_jcalhau.png" />
	            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_jcalhau.png" /> */}
              <meta property="og:type" content={meta.type} />
              <meta property="og:site_name" content={meta.name} />
              <meta property="og:description" content={meta.description} />
              <meta property="og:title" content={meta.title} />
              <meta property="og:image" content={meta.image} />

              {/* {meta.date && (
              <meta property="article:published_time" content={meta.date} />
              )} */}
          </Head>

          <TemplatesHeader0 />

          <section>

            {children}

          </section>

          <Footer0 />

          {/* <div className="scroll-to-top absolute bottom-0 right-0 z-10">
            {isVisible && (
              <div onClick={scrollToTop}>
                <h3 className="text-red-600">Go up!</h3>
              </div>
            )}
          </div> */}
      </div>
  );
}
