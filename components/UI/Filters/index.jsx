import React from 'react'
import {
  ArrowBottomSvg,
  ArrowLeftSvg,
  BoxSvg,
  FilterSvg,
  LocationSvg,
  SearchSvg,
  StopwatchSvg,
} from '../../../utils/svgs'
import cls from './Filters.module.scss'

export default function Filters() {
  return (
    <div className={cls.filters}>
      <div className={cls.goback}>
        <ArrowLeftSvg />
      </div>
      <div className={cls.place}>
        <div className={cls.location}>
          <LocationSvg />
        </div>
        <select>
          <option>2972 Westheimer Rd. Santa Ana</option>
          <option>1600 Mountain View, CA</option>
          <option>Menlo Park, CA 94025</option>
        </select>
        <div className={cls.arrow}>
          <ArrowBottomSvg />
        </div>
      </div>
      <div className={cls.search}>
        <div className={cls.loupe}>
          <SearchSvg />
        </div>
        <input type='text' placeholder='Search products in Wallmart' />
        <div className={cls.filter}>
          <FilterSvg />
        </div>
      </div>
      <div className={cls.time}>
        <div>
          <StopwatchSvg />
          <p>By 09:00 — 23:00</p>
        </div>
      </div>
      <div className={cls.price}>
        <div>
          <BoxSvg />
        </div>
        <p>$230.80</p>
      </div>
    </div>
  )
}
