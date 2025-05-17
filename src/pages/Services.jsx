import React from 'react'
import Herosection from '../components/Herosection'
import helmetImage from '../assets/helmet_arch.png'
import ServiceCatalog from '../components/ServiceCatlog'

const Services = () => {
  return (
    <>
    <section>

<Herosection image={helmetImage} />
    </section>

    <section>
        <ServiceCatalog/>
    </section>

    </>
  )
}

export default Services
