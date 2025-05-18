import React from 'react'
import Herosection from '../components/Herosection'
import FeaturedProject from '../components/FeaturedProject'

const Projects = () => {
  const text = "Trusted across industries to build, restore, and maintain — from modern facilities to heritage sites."
  return (
    <>
      <section>
        <Herosection text={text} image="https://www.baumerk.com/storage/app/media/blog/c719e196898ce8a99eef52ee12cbeac93382b334-isyeri-tadilati.jpeg" />
      </section>

      <section>
        <FeaturedProject/>
      </section>
    </>
  )
}

export default Projects
