import React from 'react'
import cls from './Widgets.module.scss'
import widgetData from './widgetData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'

import 'swiper/css'

import { Autoplay } from 'swiper'

export default function Widgets() {
  return (
    <section className={cls.widgets}>
      <Swiper
        className='swiper'
        slidesPerView={4}
        spaceBetween={20}
        loop={false}
        speed={3000}
        autoplay={{
          delay: 0,
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1140: {
            slidesPerView: 3.7,
          },
          1360: {
            slidesPerView: 4.1,
          },
          1440: {
            slidesPerView: 4.5,
          },
          1580: {
            slidesPerView: 5,
          },
        }}
        // modules={[Autoplay]}
      >
        {widgetData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (1 - index * 0.1) }}
              className={cls.widget}
              style={{
                background: `url(${item.src})`,
              }}
            >
              <h3 style={{ color: item.textColor }} className={cls.title}>
                {item.title}
              </h3>
              <div style={{ width: !item.hasBtn ? '100px' : 'initial' }}>
                <p
                  style={{
                    color: item.textColor,
                    marginBottom: !item.hasBtn ? 0 : 22,
                  }}
                  className={cls.subtitle}
                >
                  {item.subtitle}
                </p>
                {item.hasBtn && (
                  <button
                    style={{
                      backgroundColor: item.textColor,
                      color: item.btnTextColor,
                    }}
                    className={cls.btn}
                  >
                    {item.btnText}
                  </button>
                )}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
