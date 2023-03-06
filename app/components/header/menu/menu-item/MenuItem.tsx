import { FC } from 'react'
import Link from 'next/link'

import { ILink } from '@/app/data/link/link.interface'

import styles from './MenuItem.module.scss'

interface IMenuItemLink {
  item: ILink
}

const MenuItem: FC<IMenuItemLink> = ({ item }) => {
  return (
    <Link href={item.href} className={styles.link}>
      {item.name}
    </Link>
  )
}
export default MenuItem
