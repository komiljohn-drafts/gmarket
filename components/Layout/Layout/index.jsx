import React from 'react'
import cls from './Layout.module.scss'

function Layout({ children }) {
  return <main className={cls.layout}>{children}</main>
}

export default Layout
