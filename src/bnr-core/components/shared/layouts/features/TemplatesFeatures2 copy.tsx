
import { DocumentData } from "firebase/firestore"
import React, { useEffect, useState } from "react"

import { getCards } from 'src/@helpers/componenteServicosHelper'

/* Utils */
import parse from 'html-react-parser'

function TemplatesFeatures2({ id, slug }) {
    const [loading, setLoading] = useState(true)
    // const [conteudo, setConteudo] = useState<DocumentData[]>([])
    const [conteudo, setConteudo] = useState([])
    const [itemsArray, setItemsArray] = useState([])

    let items = []
  
    useEffect(() => {
        
        if (loading && !conteudo.length) {
          try {
            (async () => setConteudo(await getCards(id)))()
          } catch(error) {
            console.log(error)
          }

          if (conteudo[slug]) {
              let result
              
              let item1 = conteudo[slug]['icon1']
              result = Object.keys(item1).map(key => ({ title: key, desc: item1[key] }))
              item1 = JSON.parse(`{ "title" : "${result[0].title}", "desc" : "${result[0].desc}" }`)

              items[0] = item1
              
              let item2 = conteudo[slug]['icon2']
              result = Object.keys(item2).map(key => ({ title: key, desc: item2[key] }))
              item2 = JSON.parse(`{ "title" : "${result[0].title}", "desc" : "${result[0].desc}" }`)
              
              items[1] = item2
              
              let item3 = conteudo[slug]['icon3']
              result = Object.keys(item3).map(key => ({ title: key, desc: item3[key] }))
              item3 = JSON.parse(`{ "title" : "${result[0].title}", "desc" : "${result[0].desc}" }`)
              
              items[2] = item3
              
              let item4 = conteudo[slug]['icon4']
              result = Object.keys(item4).map(key => ({ title: key, desc: item4[key] }))
              item4 = JSON.parse(`{ "title" : "${result[0].title}", "desc" : "${result[0].desc}" }`)
              
              items[3] = item4

              setItemsArray(items)

              setLoading(false)
          }
        }

    }, [setConteudo, conteudo, id, loading, setLoading, items, setItemsArray])
    
  return (
        <>
            {!loading &&
                <div className="container my-24 px-6 mx-auto">
                    
                    <section className="mb-32 text-gray-800 text-center">
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center">

                        <div className="mb-12 lg:mb-0 relative">
                            <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
                            </path>
                            </svg>
                            <h5 className="text-lg font-medium text-blue-600 font-bold mb-4">{itemsArray[0]['title']}</h5>
                            <h6 className="font-medium text-gray-500">{itemsArray[0]['desc']}</h6>
                            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>

                        <div className="mb-12 lg:mb-0 relative">
                            <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
                            </svg>
                            <h5 className="text-lg font-medium text-blue-600 font-bold mb-4">{itemsArray[1]['title']}</h5>
                            <h6 className="font-medium text-gray-500">{itemsArray[1]['desc']}</h6>
                            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>

                        <div className="mb-12 md:mb-0 relative">
                            <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" />
                            </svg>
                            <h5 className="text-lg font-medium text-blue-600 font-bold mb-4">{itemsArray[2]['title']}</h5>
                            <h6 className="font-medium text-gray-500">{itemsArray[2]['desc']}</h6>
                            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>

                        <div className="relative">
                            <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor"
                                d="M320,32a32,32,0,0,0-64,0v96h64Zm48,128H16A16,16,0,0,0,0,176v32a16,16,0,0,0,16,16H32v32A160.07,160.07,0,0,0,160,412.8V512h64V412.8A160.07,160.07,0,0,0,352,256V224h16a16,16,0,0,0,16-16V176A16,16,0,0,0,368,160ZM128,32a32,32,0,0,0-64,0v96h64Z" />
                            </svg>
                            <h5 className="text-lg font-medium text-blue-600 font-bold mb-4">{itemsArray[3]['title']}</h5>
                            <h6 className="font-medium text-gray-500 mb-0">{itemsArray[3]['desc']}</h6>
                        </div>
                        </div>
                    </section>
                </div>
            }
        </>
  );
}

export default TemplatesFeatures2