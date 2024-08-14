import React, { useEffect } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
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

  return (
    <section className='projects' id="projects">
      <div className="container">
        <div className="projects-content">
          <h2 className="projects-title">
            {t('projectsTitle')}
          </h2>
          <h1 className="projects-subtitle">{t('projectsTitle2')}</h1>
          <div className="projects-cards">
            {projects.map((item) => (
              <div className="projects-card" key={item.id}>
                <img src={item.image} className='projects-img' alt={item.link} />
                <a href={`https://${item.link}`} className="projects-items">
                  <h1 className='projects-name'>{item.link}</h1>
                  <FaArrowRightLong color='#fff' fontSize={20} />
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
