import React from 'react'
import {
  ArrowBottomSvg,
  ArrowLeftSvg,
  BoxSvg,
  FilterSvg,
  LocationSvg,
  SearchSvg,
  StopwatchSvg,
} from '../../../utils/svgs'
import cls from './Filters.module.scss'
import { motion } from 'framer-motion'

export default function Filters() {
  return (
    <div className={cls.filters}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className={cls.goback}
      >
        <ArrowLeftSvg />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className={cls.place}
      >
        <div className={cls.location}>
          <LocationSvg />
        </div>
        <select>
          <option>2972 Westheimer Rd. Santa Ana</option>
          <option>1600 Mountain View, CA</option>
          <option>Menlo Park, CA 94025</option>
        </select>
        <div className={cls.arrow}>
          <ArrowBottomSvg />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className={cls.search}
      >
        <div className={cls.loupe}>
          <SearchSvg />
        </div>
        <input type='text' placeholder='Search products in Wallmart' />
        <div className={cls.filter}>
          <FilterSvg />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className={cls.time}
      >
        <div>
          <StopwatchSvg />
          <p>By 09:00 — 23:00</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className={cls.price}
      >
        <div>
          <BoxSvg />
        </div>
        <p>$230.80</p>
      </motion.div>
    </div>
  )
}
