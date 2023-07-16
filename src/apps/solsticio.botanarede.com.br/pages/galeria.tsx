/* React,Next.JS imports */
import React, { useEffect, useState } from "react"
import Image from 'next/image'

/* Framework imports */
import ContainerLandingPage from 'src/@shared/layouts/ContainerLandingPage'

import TemplatesGallery1 from 'src/@shared/layouts/gallery/TemplatesGallery1'

const GaleriaPage = () => {

return (
    <>
        <ContainerLandingPage title="Solstício - Energia Solar">
            <div className="container px-6 mx-auto">
                <TemplatesGallery1 />
            </div>
        </ContainerLandingPage>
    </>
)}

export default GaleriaPage