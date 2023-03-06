import { FC } from 'react'

import Layout from '@/app/layout/layout/Layout'
import Container from '@/app/components/container/Container'
import TitleScroll from '@/app/components/title-scroll/TextScroll'
import HorizontalLine from '@/app/components/horizontal-line/HorizontalLine'
import ListProjects from '@/app/components/list-projects/ListProjects'

import styles from './Home.module.scss'

const Home: FC = () => {
  return (
    <Layout
      title="Portfolio"
      description="More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more."
    >
      <div className={styles.wrapper}>
        <div className={styles.main_section}>
          <TitleScroll text="FRONTEND DEVELOPER &&nbsp;" />
          <Container>13212</Container>
        </div>
        <div className={styles.second_section}>
          <Container>
            <HorizontalLine />
            <div className={styles.blocks}>
              <div className={styles.block}>
                <div className={styles.title}>
                  <span>A</span>
                  <span>B</span>
                  <span>O</span>
                  <span>U</span>
                  <span>T</span>
                  <span> </span>
                  <span>M</span>
                  <span>E</span>
                </div>
              </div>
              <div className={styles.block}>
                <p className={styles.description}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere saepe perspiciatis debitis ipsum cumque, ducimus eos a
                  molestias doloremque veniam! Incidunt unde inventore nemo
                  voluptatibus dolor. Obcaecati vero nemo illum!
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className={styles.second_section}>
          <Container>
            <HorizontalLine />
            <div className={styles.blocks}>
              <div className={styles.block}>
                <div className={styles.title}>
                  <span>H</span>
                  <span>E</span>
                  <span>R</span>
                  <span>E</span>
                  <span> </span>
                  <span>A</span>
                  <span>R</span>
                  <span>E</span>
                  <span> </span>
                  <span>P</span>
                  <span>R</span>
                  <span>O</span>
                  <span>J</span>
                  <span>E</span>
                  <span>C</span>
                  <span>T</span>
                  <span>S</span>
                </div>
              </div>
              <div className={styles.block}>
                <ListProjects />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  )
}
export default Home
