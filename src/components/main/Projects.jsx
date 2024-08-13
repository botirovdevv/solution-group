import React, { useEffect } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { projects } from '../../data/projectsData';
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next';
import { useProjects } from '../../context/ProjectsContex';

const Projects = () => {
  const { t } = useTranslation();
  const { projects, getAllProjects, deleteProject, loading, error } = useProjects();

  useEffect(() => {
    getAllProjects();
  }, []);

  const handleDelete = async (projectId) => {
    try {
      await deleteProject(projectId);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const sr = ScrollReveal();
  useEffect(() => {

    sr.reveal('.projects-card', {
      duration: 1800,
      origin: 'bottom',
      distance: '100px',
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    sr.reveal('.service-img', {
      duration: 1200,
      origin: 'bottom',
      distance: '50px',
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });
  }, [])
  return (
    <section className='projects' id="projects">
      <div className="container">
        <div className="projects-content">
          <h2 className="projects-title">
            {t('projectsTitle')}
          </h2>
          <h1 className="projects-subtitle">{t('projectsTitle2')}</h1>
          <div className="projects-cards">
            {
              projects.map((item) => (
                <div className="projects-card" key={item.id}>
                  <img src={item.image} className='projects-img' alt="" />
                  <a href={item.link} className="projects-items">
                    <h1 className='projects-name'>{item.link}</h1>
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