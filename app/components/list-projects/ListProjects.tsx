import React, { FC } from 'react'
import styles from './ListProjects.module.scss'

import ProjectItem from './project-item/ProjectItem'

import { projects } from '@/app/data/projects/projects.data'

const ListProjects: FC = () => {
  return (
    <div className={styles.list_projects}>
      {projects.map((project) => {
        return <ProjectItem key={project.link} project={project} />
      })}
    </div>
  )
}
export default ListProjects
