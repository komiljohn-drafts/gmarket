import Image from 'next/image'
import React from 'react'
import { ArrowRightSvg, FilterSvg, HeartSvg, PercentSvg, PlusSvg } from '../../../utils/svgs'
import cls from './Products.module.scss'
import productsData from './productsData'

export default function Products() {
  return (
    <section className={cls.products}>
      <div className={cls.head}>
        <h2>Fresh Fruit</h2>
        <div>
          See all <ArrowRightSvg />
        </div>
      </div>
      <div className={cls.items}>
        {productsData.map((item) => (
          <div className={cls.item} key={item.id}>
            <div className={cls.percent}>
              <PercentSvg />
            </div>
            <div className={cls.heart}>
              <HeartSvg />
            </div>
            <Image src={item.src} width={131} height={131} alt='product' />
            <h4>{item.title}</h4>
            <div className={cls.action}>
              <p>{item.price}</p>
              <button>
                <PlusSvg />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
