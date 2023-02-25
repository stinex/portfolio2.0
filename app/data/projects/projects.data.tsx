import { IProject } from './projects.interface'

import ImageProductOne from '@/app/assets/images/1.jpg'
import ImageProductTwo from '@/app/assets/images/2.jpg'
import ImageProductThree from '@/app/assets/images/3.jpg'
import ImageProductFour from '@/app/assets/images/4.jpg'

export const projects: IProject[] = [
  {
    name: 'Trade & Production Company “МеталлДеталь”',
    link: 'https://detal-74.ru',
    stack: [
      'html',
      'react',
      'javascript',
      'next.js',
      'scss modules',
      'cms hygraph',
      'node.js',
      'nodemailer',
    ],
    img: ImageProductOne,
  },
  {
    name: 'Japanese massage chair Fujiiryoki JP-2000',
    link: 'https://fujiiryoki.ru',
    stack: ['html', 'react', 'javascript', 'next.js', 'emaljs', 'scss'],
    img: ImageProductTwo,
  },
  {
    name: 'Ergonova - online store of goods for health & outdoor activities',
    link: 'https://ergonova.ru',
    stack: ['html', 'angularjs', 'javascript', 'less'],
    img: ImageProductThree,
  },
  {
    name: 'MWT - online store of goods for health & outdoor activities',
    link: 'https://mwt.ru',
    stack: ['html', 'angularjs', 'javascript', 'less'],
    img: ImageProductFour,
  },
]
