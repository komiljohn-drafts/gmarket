import React from 'react'
import cls from './Layout.module.scss'

function Layout({ children }) {
  return <div className={cls.layout}>{children}</div>
}

export default Layout
