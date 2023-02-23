import { FC } from 'react'
import { Anton } from '@next/font/google'
import Marquee from 'react-fast-marquee'
import styles from './TitleScroll.module.scss'

const bebasNeue = Anton({
  weight: '400',
  subsets: ['latin'],
})

const TitleScroll: FC = () => {
  return (
    <Marquee className={`${bebasNeue.className} ${styles.text}`} speed={120}>
      FRONTEND DEVELOPER &&nbsp;
    </Marquee>
  )
}
export default TitleScroll
