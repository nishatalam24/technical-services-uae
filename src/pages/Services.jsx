import React from 'react'
import Herosection from '../components/Herosection'
import helmetImage from '../assets/helmet_arch.png'
import ServiceCatalog from '../components/ServiceCatlog'

const Services = () => {
  const text = "We offer a wide range of services to meet your needs. From construction to maintenance, we have you covered."

  return (
    <>
    <section>

<Herosection image={helmetImage} text={text} />
    </section>

    <section>
        <ServiceCatalog/>
    </section>

    </>
  )
}

export default Services
