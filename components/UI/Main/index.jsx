import React from 'react'
import Banner from '../Banner'
import Filters from '../Filters'
import cls from './Main.module.scss'

export default function Main({ data }) {
  return (
    <main>
      <Filters />
      <Banner />
    </main>
  )
}
