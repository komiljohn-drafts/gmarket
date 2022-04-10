import React, { useState } from 'react'
import { ArrowBottomSvg, FilterSvg } from '../../../utils/svgs'
import cls from './Categories.module.scss'

const categoriesData = [
  { id: 1, title: 'Pantrys', order: 1 },
  { id: 2, title: 'Fruits and Vegetables', order: 2 },
  { id: 3, title: 'Eggs and Dairys', order: 3 },
  { id: 4, title: 'Frozens', order: 4 },
  { id: 5, title: 'Beverange', order: 5 },
  { id: 6, title: 'Snacks', order: 6 },
  { id: 7, title: 'Households', order: 7 },
]

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(2)

  return (
    <section className={cls.categories}>
      <div className={cls.filter}>
        <FilterSvg />
      </div>
      <ul className={cls.list}>
        {categoriesData.map((item) => (
          <li
            onClick={() => setActiveCategory(item.order)}
            className={activeCategory === item.order && cls.active}
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className={cls.more}>
        <p>More</p>
        <ArrowBottomSvg />
      </div>
    </section>
  )
}
