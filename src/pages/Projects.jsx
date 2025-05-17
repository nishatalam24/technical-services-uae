import React from 'react'
import Herosection from '../components/Herosection'
import FeaturedProject from '../components/FeaturedProject'

const Projects = () => {
  return (
    <>
      <section>
        <Herosection image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" />
      </section>

      <section>
        <FeaturedProject/>
      </section>
    </>
  )
}

export default Projects
