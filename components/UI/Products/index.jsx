import Image from 'next/image'
import React from 'react'
import { ArrowRightSvg, HeartSvg, PercentSvg, PlusSvg } from '../../../utils/svgs'
import cls from './Products.module.scss'
import productsData from './productsData'
import { motion } from 'framer-motion'

export default function Products() {
  return (
    <section className={cls.products}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className={cls.head}
      >
        <h2>Fresh Fruit</h2>
        <div>
          <p>See all </p>
          <ArrowRightSvg />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className={cls.items}
      >
        {productsData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + (1 - index * 0.1) }}
            className={cls.item}
            key={item.id}
          >
            <div className={cls.percent}>
              <PercentSvg />
            </div>
            <div className={cls.heart}>
              <label>
                <input type='checkbox' />
                <span className={cls.label}>
                  <HeartSvg />
                </span>
              </label>
            </div>
            <Image placeholder='blur' src={item.src} width={131} height={131} alt='product' />
            <h4>{item.title}</h4>
            <div className={cls.action}>
              <p>{item.price}</p>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <PlusSvg />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
