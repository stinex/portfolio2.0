import Link from 'next/link'
import { FC } from 'react'

import styles from './MenuItem.module.scss'

import { ILink } from '@/app/data/link/link.interface'

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
