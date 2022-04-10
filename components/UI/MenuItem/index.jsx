import React from 'react'
import { ArrowRightSvg } from '../../../utils/svgs'
import cls from './MenuItem.module.scss'

export default function MenuItem({ data, activeItem, fn }) {
  return (
    <li onClick={fn} className={`${cls.item} ${data.isLink && cls.link} ${activeItem === data.order && cls.active}`}>
      {data.icon}
      <p>{data.text}</p>
      {data.isLink && <ArrowRightSvg />}
    </li>
  )
}
