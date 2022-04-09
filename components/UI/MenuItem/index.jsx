import React from 'react'
import { ArrowRightSvg, StoreSvg } from '../../../utils/svgs'
import cls from './MenuItem.module.scss'

export default function MenuItem({ data }) {
  return (
    <li className={`${cls.item} ${data.isLink && cls.link}`}>
      {data.icon}
      <p>{data.text}</p>
      {/* <div className={cls.arrowIcon}> */}
      {data.isLink && <ArrowRightSvg />}
      {/* </div> */}
    </li>
  )
}
