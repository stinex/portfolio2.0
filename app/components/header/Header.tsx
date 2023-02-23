import Link from 'next/link'
import { FC } from 'react'
import Container from '../container/Container'
import ColorMode from './color-mode/ColorMode'

import styles from './Header.module.scss'
import Menu from './menu/Menu'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_wapper}>
          <Link href="/" className={styles.logo}>
            vlad aparin
          </Link>

          <ColorMode />
          {/* <Menu /> */}
        </div>
      </Container>
    </header>
  )
}
export default Header
