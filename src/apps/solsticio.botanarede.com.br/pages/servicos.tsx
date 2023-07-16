/* React,Next.JS imports */
import React, { useEffect, useState } from "react"
import Image from 'next/image'

/* Framework imports */
import ContainerLandingPage from 'src/@shared/layouts/ContainerLandingPage'

import TemplatesFeatures1 from 'src/@shared/layouts/features/TemplatesFeatures1'
import TemplatesFeatures2 from 'src/@shared/layouts/features/TemplatesFeatures2'

import { getCards } from 'src/@helpers/componenteServicosHelper'

const ServicosPage = () => {
  const [loading, setLoading] = useState(true)
  // const [conteudo, setConteudo] = useState<DocumentData[]>([])
  const [cards, setCards] = useState([])

  let items = []

  useEffect(() => {
      
      if (loading && !cards.length) {
        try {
          (async () => setCards(await getCards("B6Mob8PjG1hVD4tc9hoa")))()
        } catch(error) {
          console.log(error)
        }
        
        if (cards['cards']) {
          // console.log(cards)
          setLoading(false)
        }
      }

  }, [setCards, cards, loading, setLoading])

return (
    <>
        <ContainerLandingPage title="Solstício - Energia Solar">
                {!loading &&
                    <div className="container px-6 mx-auto">
                        <TemplatesFeatures1 listaObj={cards['lista']} metadataObj={cards['metadata']} />
                        <TemplatesFeatures2 cardsObj={cards['cards']} />
                    </div>
                }
        </ContainerLandingPage>
    </>
    )}

export default ServicosPage