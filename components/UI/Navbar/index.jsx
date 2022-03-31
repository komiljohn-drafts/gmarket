import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '../../Layout/Container'
import cls from './Navbar.module.scss'
import { useWindowSize } from '../../../utils/useWindowSize'
import { motion } from 'framer-motion'

const boxWrapperVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: { opacity: 0, x: '100%' },
}

const burgerMenuVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: { opacity: 0, x: '100%' },
}

const btnOpenTopVariant = {
  open: {
    transform: 'rotate(-25deg) translateY(9px)',
  },
  closed: { transform: 'rotate(0deg) translateY(0px)' },
}

const btnOpenBottomVariant = {
  open: {
    transform: 'rotate(25deg) translateY(-8px)',
  },
  closed: { transform: 'rotate(0deg)  translateY(0px)' },
}

const btnClosedVariant = {
  open: {
    opacity: 0,
    x: '100%',
  },
  closed: { opacity: 1, x: 0 },
}

function Navbar() {
  const size = useWindowSize()
  const [showBurger, setShowBurger] = useState(false)
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (size.width <= 720) {
      setShowBurger(true)
    } else {
      setShowBurger(false)
      setShowBurgerMenu(false)
    }
  }, [size])

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1500)
  }, [])

  return (
    <motion.div className={cls.wrapper} id='wrapper'>
      <Container>
        <nav className={cls.nav}>
          <div className={cls.logo}>
            <Image src='/icons/logo.svg' width={32} height={32} alt='logo' />
            <p>finestra</p>
          </div>
          {showBurger ? (
            <div className={cls.burger__wrapper}>
              <div
                className={cls.burger}
                onClick={() => setShowBurgerMenu((p) => !p)}
              >
                <motion.div
                  animate={showBurgerMenu ? 'open' : 'closed'}
                  variants={btnOpenTopVariant}
                  className={cls.burger__item}
                ></motion.div>
                <motion.div
                  animate={showBurgerMenu ? 'open' : 'closed'}
                  variants={btnClosedVariant}
                  className={cls.burger__item}
                ></motion.div>
                <motion.div
                  animate={showBurgerMenu ? 'open' : 'closed'}
                  variants={btnOpenBottomVariant}
                  className={cls.burger__item}
                ></motion.div>
              </div>
            </div>
          ) : (
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
          )}
        </nav>
      </Container>
      <motion.div
        style={{ opacity: 0 }}
        animate={showBurgerMenu ? 'open' : 'closed'}
        variants={boxWrapperVariants}
        className={cls.box__wrapper}
        onClick={() => setShowBurgerMenu(false)}
      ></motion.div>
      <motion.div
        style={{ opacity: 0 }}
        animate={showBurgerMenu ? 'open' : 'closed'}
        variants={burgerMenuVariants}
        className={cls.burger__menu}
      >
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
