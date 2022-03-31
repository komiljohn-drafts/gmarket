import React from 'react'
import Image from 'next/image'
import Container from '../../Layout/Container'
import cls from './Navbar.module.scss'

function Navbar() {
  return (
    <div className={cls.wrapper}>
      <Container>
        <nav className={cls.nav}>
          <div className={cls.logo}>
            <Image src='/icons/logo.svg' width={32} height={32} alt='logo' />
            <p>finestra</p>
          </div>
          <ul className={cls.nav__list}>
            <li className={cls.nav__item}>
              <a href='#'>Home</a>
            </li>
            <li className={cls.nav__item}>
              <a href='#'>Blog</a>
            </li>
            <li className={cls.nav__item}>
              <a href='#'>About Us</a>
            </li>
            <li className={cls.nav__item}>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
