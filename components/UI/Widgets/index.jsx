import React from 'react'
import cls from './Widgets.module.scss'
import widgetData from './widgetData'

export default function Widgets() {
  return (
    <section className={cls.widgets}>
      {widgetData.map((item) => (
        <div
          key={item.id}
          className={cls.widget}
          style={{
            backgroundImage: `url(${item.src})`,
            boxShadow: `${item.textColor} 0px 10px 10px -10px`,
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
      ))}
    </section>
  )
}
