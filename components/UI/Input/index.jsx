import React from 'react'
import cls from './Input.module.scss'

function Input() {
  return (
    <input className={cls.input} placeholder='your@email.com' type='text' />
  )
}

export default Input
