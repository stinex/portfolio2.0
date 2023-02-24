import { FC } from 'react'

import styles from './Menu.module.scss'
import { link_ru } from '@/app/data/link/link.data'
import MenuItem from './menu-item/MenuItem'

const Menu: FC = () => {
  return (
    <nav>
      <ul>
        {link_ru.map((item) => (
          <MenuItem key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  )
}
export default Menu
