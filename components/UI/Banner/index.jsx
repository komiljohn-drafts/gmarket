import Image from 'next/image'
import React, { useState } from 'react'
import {
  BookmarkSvg,
  DeliverSvg,
  InfoSvg,
  RecipeSvg,
  StarSvg,
  StoreSvg,
} from '../../../utils/svgs'
import cls from './Banner.module.scss'
import bannerImage from '/public/images/banner.png'
import { motion } from 'framer-motion'

const optionsData = [
  {
    id: 1,
    text: 'Shop',
    icon: <StoreSvg />,
    order: 1,
  },
  {
    id: 2,
    text: 'Recipes',
    icon: <RecipeSvg />,
    order: 2,
  },
]

export default function Banner() {
  const [activeOption, setActiveOption] = useState(1)

  return (
    <section className={cls.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className={cls.banner}
      >
        <div className={cls.image}>
          <Image
            placeholder='blur'
            layout='responsive'
            src={bannerImage}
            alt='banner'
          />
          <div>
            <Image
              src='/icons/logo.png'
              alt='logo'
              width={52.5}
              height={52.5}
            />
          </div>
        </div>
        <div className={cls.action}>
          <div className={cls.text}>
            <h2>Wallmart store</h2>
            <div>
              <InfoSvg />
              <p>Store info</p>
            </div>
            <div>
              <DeliverSvg />
              <p>Store delivery time</p>
            </div>
            <div>
              <BookmarkSvg />
              <p>Saved</p>
            </div>
          </div>
          <div className={cls.rate}>
            <StarSvg />
            <p>4.5</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className={cls.options}
      >
        {optionsData.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveOption(item.order)}
            className={`${cls.item} ${
              activeOption === item.order ? cls.active : ''
            }`}
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
