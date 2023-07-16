import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

import React, { useEffect, useState } from "react"

interface Props {
    children: ReactNode,
    title: ReactNode
}

export default function Container({ children, title }: Props) {
  
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    /* Ajuste background-color do site */
    const body = document.querySelector('body');
    body?.classList.add('bnr-container-body');

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
  const meta = {
      title: 'Solstício',
      description: `Serviços elétricos`,
      image: '/images/marca_solsticio.png',
      type: 'website'
  }

//   useEffect(() => {
//         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
//   });

  return (
      <div>
          <Head>
              <title>{meta.title}</title>
              <meta name="robots" content="follow, index" />
              <meta content={meta.description} name="description" />
              <meta property="og:url" content={`https://botanarede.com.br${router.asPath}`} />
              <link rel="canonical" href={`https://botanarede.com.br${router.asPath}`} />
              {/* <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_jcalhau.png" />
	            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_jcalhau.png" /> */}
              <meta property="og:type" content={meta.type} />
              <meta property="og:site_name" content="jcalhau.com" />
              <meta property="og:description" content={meta.description} />
              <meta property="og:title" content={meta.title} />
              <meta property="og:image" content={meta.image} />

              {/* {meta.date && (
              <meta property="article:published_time" content={meta.date} />
              )} */}
          </Head>

          <Header />

          <main className="relative">
              {children}
          </main>

          <Footer />

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
