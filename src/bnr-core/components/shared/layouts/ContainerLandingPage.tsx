import { useRouter } from 'next/router'
import Head from 'next/head'

import FooterLandingPage from './FooterLandingPage'

import { ReactNode } from 'react'

import React, { useEffect, useState } from "react"

import TemplatesHeader1 from './header/TemplatesHeader1'

interface Props {
    children: ReactNode,
    title: ReactNode
}

export default function ContainerLandingPage({ children, title }: Props) {
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
      title: 'Solstício',
      description: `Serviços elétricos`,
      image: '/images/marca_solsticio.png',
      type: 'website',
      tagTitle: 'Solstício - Serviços elétricos'
  }

//   useEffect(() => {
//         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
//   });

  return (
      <div>
          <Head>
              <title>{meta.tagTitle}</title>
              <meta name="robots" content="follow, index" />
              <meta content={meta.description} name="description" />
              <meta property="og:url" content={`https://solsticio.site${router.asPath}`} />
              <link rel="canonical" href={`https://solsticio.site${router.asPath}`} />
              {/* <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_jcalhau.png" />
	            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_jcalhau.png" /> */}
              <meta property="og:type" content={meta.type} />
              <meta property="og:site_name" content="Solstício - Serviços elétricos" />
              <meta property="og:description" content={meta.description} />
              <meta property="og:title" content={meta.title} />
              <meta property="og:image" content={meta.image} />

              {/* {meta.date && (
              <meta property="article:published_time" content={meta.date} />
              )} */}
          </Head>

          <TemplatesHeader1 />

          {children}

          <FooterLandingPage />

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
