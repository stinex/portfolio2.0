import Link from 'next/link'
import { FC } from 'react'
import ColorMode from './color-mode/ColorMode'

import styles from './Header.module.scss'
import Menu from './menu/Menu'

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.logo}>
        Vlad Aparin
      </Link>

      <ColorMode />
      {/* <Menu /> */}
    </div>
  )
}
export default Header
