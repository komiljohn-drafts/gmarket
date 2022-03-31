import React from 'react'
import cls from './Button.module.scss'

function Button({ children }) {
  return (
    <button className={cls.button} type='submit'>
      {children}
    </button>
  )
}

export default Button
