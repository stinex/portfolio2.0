import { useActions } from '@/app/hooks/useActions'
import { IMenu } from '@/app/store/menu/menu.interface'
import { FC } from 'react'
import styles from './ButtonMenu.module.scss'



const ButtonMenu: FC<IMenu> = ({ menu } ) => {
  const { setMenu } = useActions()
  return (
    <div onClick={() => setMenu(!menu)} className={styles.btn_menu}>
      <span className={`${styles.line} ${styles.line_top}`}></span>
      <span className={`${styles.line} ${styles.line_middle}`}></span>
      <span className={`${styles.line} ${styles.line_bottom}`}></span>
    </div>
  )
}
export default ButtonMenu
