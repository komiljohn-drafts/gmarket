import React from 'react'
import { FilterSvg } from '../../../utils/svgs'
import cls from './Categories.module.scss'

export default function Categories() {
  return (
    <section className={cls.categories}>
      <div className={cls.filter}>
        <FilterSvg />
      </div>
      <ul className={cls.list}>
        <li>Pantrys</li>
        <li className={cls.active}>Fruits and Vegetables</li>
        <li>Eggs and Dairys</li>
        <li>Frozens</li>
        <li>Beverange</li>
        <li>Snacks</li>
        <li>Households</li>
        <li className={cls.more}>More</li>
      </ul>
    </section>
  )
}
