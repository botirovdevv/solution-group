import React from 'react'
import img from '../../assets/images/projects.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { projects } from '../../data/projectsData';

const Projects = () => {
  return (
    <section className='projects'>
      <div className="container">
        <div className="projects-content">
          <h2 className="projects-title">
            Loyihalar
          </h2>
          <h1 className="projects-subtitle">So'ngi loyihalar</h1>
          <div className="projects-cards">
            {
              projects.map((item) => (
                <div className="projects-card">
                  <img src={item.img} className='projects-img' alt="" />
                  <a href={item.link} className="projects-items">
                    <h1 className='projects-name'>{item.name}</h1>
                    <FaArrowRightLong color='#fff' fontSize={20} />
                  </a>
                </div>

              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects