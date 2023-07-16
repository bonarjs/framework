import { useState } from "react"

function TemplatesFeatures1({ listaObj, metadataObj }) {
    const [itemsArray, setItemsArray] = useState([])

    const titulo = Object.entries(metadataObj)[0][1].toString()
    const desc = Object.entries(metadataObj)[1][1].toString()

    const items = Object.keys(listaObj).map(key => ({ title: key, desc: listaObj[key] }))

    if (!itemsArray.length) {
        setItemsArray(items)
    }
    
    return (
        <>
            <div className="container my-24 px-6 mx-auto">

            <section className="mb-32 text-gray-800">
                <div className="flex flex-wrap items-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-4/12 mb-6 md:mb-0 px-3">
                    <h2 className="text-3xl font-bold mb-6">
                        {titulo}
                    </h2>

                    <p className="text-gray-500 mb-12">
                        {desc}
                    </p>
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 mb-6 mb-md-0 px-3">

                    <div className="flex flex-wrap">

                        {itemsArray.map((row, key) => (
                            <div key={key} className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                                <div className="flex">
                                <div className="shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                    </path>
                                    </svg>
                                </div>
                                <div className="grow ml-4">
                                    <p className="font-bold mb-1">{row.title}</p>
                                    <p className="text-gray-500">
                                        {row.desc}
                                    </p>
                                </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>

                </div>
                </div>
            </section>

            </div>
        </>
    );
}

export default TemplatesFeatures1