import React from 'react'
import cls from './Widgets.module.scss'
import widgetData from './widgetData'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Autoplay } from 'swiper'

export default function Widgets() {
  return (
    <section className={cls.widgets}>
      <Swiper
        slidesPerView={4.4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1440: {
            slidesPerView: 5,
          },
        }}
        modules={[Autoplay]}
      >
        {widgetData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={cls.widget}
              style={{
                background: `url(${item.src})`,
              }}
            >
              <h3 style={{ color: item.textColor }} className={cls.title}>
                {item.title}
              </h3>
              <div style={{ width: !item.hasBtn && '100px' }}>
                <p style={{ color: item.textColor, marginBottom: !item.hasBtn && 0 }} className={cls.subtitle}>
                  {item.subtitle}
                </p>
                {item.hasBtn && (
                  <button style={{ backgroundColor: item.textColor, color: item.btnTextColor }} className={cls.btn}>
                    {item.btnText}
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
