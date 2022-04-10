import Image from 'next/image'
import React, { useState } from 'react'
import { HamburgerSvg, NotificationSvg, PlusSvg, SettingSvg, ShareSvg } from '/utils/svgs'
import MenuItem from '../MenuItem'
import { menuItemsData, menuActionsData } from './menuItemsData'
import cls from './Sidebar.module.scss'
import { motion } from 'framer-motion'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(1)

  return (
    <motion.aside initial={{ width: 0 }} animate={{ width: '100%' }} className={cls.sidebar}>
      <motion.div
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cls.hamburger}
      >
        <HamburgerSvg />
        <p>GMarket</p>
      </motion.div>
      <motion.div className={cls.menu}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={cls.profile}
        >
          <div className={cls.image}>
            <SettingSvg />
            <Image src='/images/user.png' width={64} height={64} alt='profile' />
            <NotificationSvg />
          </div>
          <div className={cls.info}>
            <p className={cls.name}>Roberto Cavanali</p>
            <p className={cls.phone}>(+99893) 100-00-00</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={cls.wallet}
        >
          <div className={cls.balance}>
            <div className={cls.text}>
              <p className={cls.title}>Wallet balance</p>
              <p className={cls.price}>$425,97</p>
            </div>
            <div className={cls.icon}>
              <PlusSvg />
            </div>
          </div>
          <div className={cls.share}>
            <ShareSvg />
            <p>Share wallet</p>
          </div>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className={cls.items}
        >
          {menuItemsData.map((item) => (
            <MenuItem data={item} activeItem={activeItem} fn={() => setActiveItem(item.order)} key={item.id} />
          ))}
        </motion.ul>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className={cls.actionItems}
        >
          {menuActionsData.map((item) => (
            <MenuItem fn={() => {}} data={item} key={item.id} />
          ))}
        </motion.ul>
      </motion.div>
    </motion.aside>
  )
}
