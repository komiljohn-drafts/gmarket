import React from 'react'
import Banner from '../Banner'
import Categories from '../Categories'
import Filters from '../Filters'
import Products from '../Products'
import Widgets from '../Widgets'

export default function Main({ data }) {
  return (
    <main>
      <Filters />
      <Banner />
      <Widgets />
      <Categories />
      <Products />
    </main>
  )
}
