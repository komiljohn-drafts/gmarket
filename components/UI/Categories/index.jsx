import React, { useState } from 'react'
import { ArrowBottomSvg, FilterSvg } from '../../../utils/svgs'
import cls from './Categories.module.scss'
import { motion } from 'framer-motion'

const categoriesData = [
  { id: 1, title: 'Pantrys', order: 1 },
  { id: 2, title: 'Fruits and Vegetables', order: 2 },
  { id: 3, title: 'Eggs and Dairys', order: 3 },
  { id: 4, title: 'Frozens', order: 4 },
  { id: 5, title: 'Beverange', order: 5 },
  { id: 6, title: 'Snacks', order: 6 },
  { id: 7, title: 'Households', order: 7 },
  { id: 8, title: 'Drink', order: 8 },
  { id: 9, title: 'Plov', order: 9 },
]

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [activeCategory, setActiveCategory] = useState(2)

  return (
    <section className={cls.categories}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className={cls.filter}
      >
        <FilterSvg />
      </motion.div>

      <ul className={cls.list}>
        {categoriesData.map((item, index) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.1 }}
            onClick={() => setActiveCategory(item.order)}
            className={activeCategory === item.order ? cls.active : ''}
            key={item.id}
          >
            {item.title}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
