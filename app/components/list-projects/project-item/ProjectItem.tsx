import { FC } from 'react'

import styles from './ProjectItem.module.scss'

import { IProject } from '@/app/data/projects/projects.interface'

interface IProjectItem {
  project: IProject
}

const ProjectItem: FC<IProjectItem> = ({ project }) => {
  return (
    <a href={project.link} target="_blank" className={styles.project}>
      <div className={styles.project_top}>
        <div className={styles.name}>{project.name}</div>
        <div className={styles.stacks}>
          {project.stack.map((stack) => (
            <span className={styles.stack}>{stack}</span>
          ))}
        </div>
      </div>
      <span className={styles.line}></span>
    </a>
  )
}
export default ProjectItem
