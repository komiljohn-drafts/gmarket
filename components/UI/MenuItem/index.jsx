import React from 'react'
import { ArrowRightSvg } from '../../../utils/svgs'
import cls from './MenuItem.module.scss'
import { motion } from 'framer-motion'

export default function MenuItem({ data, activeItem, fn }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + data.order * 0.05 }}
      onClick={fn}
      className={`${cls.item} ${data.isLink ? cls.link : ''} ${
        activeItem === data.order ? cls.active : ''
      }`}
    >
      {data.icon}
      <p>{data.text}</p>
      {data.isLink && <ArrowRightSvg />}
    </motion.li>
  )
}
