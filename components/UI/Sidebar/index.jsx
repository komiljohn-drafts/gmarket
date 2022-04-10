import Image from 'next/image'
import React, { useState } from 'react'
import { HamburgerSvg, NotificationSvg, PlusSvg, SettingSvg, ShareSvg } from '/utils/svgs'
import MenuItem from '../MenuItem'
import { menuItemsData, menuActionsData } from './menuItemsData'
import cls from './Sidebar.module.scss'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(1)

  return (
    <aside className={cls.sidebar}>
      <div className={cls.hamburger}>
        <HamburgerSvg />
        <p>GMarket</p>
      </div>
      <div className={cls.menu}>
        <div className={cls.profile}>
          <div className={cls.image}>
            <SettingSvg />
            <Image src='/images/user.png' width={64} height={64} alt='profile' />
            <NotificationSvg />
          </div>
          <div className={cls.info}>
            <p className={cls.name}>Roberto Cavanali</p>
            <p className={cls.phone}>(+99893) 100-00-00</p>
          </div>
        </div>
        <div className={cls.wallet}>
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
        </div>
        <ul className={cls.items}>
          {menuItemsData.map((item) => (
            <MenuItem data={item} activeItem={activeItem} fn={() => setActiveItem(item.order)} key={item.id} />
          ))}
        </ul>
        <ul className={cls.actionItems}>
          {menuActionsData.map((item) => (
            <MenuItem fn={() => {}} data={item} key={item.id} />
          ))}
        </ul>
      </div>
    </aside>
  )
}
