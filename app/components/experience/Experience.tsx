import { IJob } from '@/app/data/job/job.interface'
import { fromatDate } from '@/app/utils/format-date'
import { FC, useState } from 'react'

import styles from './Experience.module.scss'

interface IJobItem {
  job: IJob
}

const Experience: FC<IJobItem> = ({ job }) => {

    const [read, setRead] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.data}>
        {fromatDate(job.data_start) + ' — ' + fromatDate(job.data_end)}
      </div>
      <div className={styles.company}>
        <div className={styles.name}>{job.job_name}</div>
        <div className={styles.job_title}>{job.job_title}</div>
      </div>
      <div className={`${styles.description} ${!read ? styles.read : ''}`}>
        {job.desc}
      </div>
      <div className={styles.btn} onClick={() => setRead(!read)}>
        Read
      </div>
    </div>
  )
}
export default Experience
