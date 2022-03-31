import React from 'react'
import Image from 'next/image'
import Container from '../../Layout/Container'
import cls from './Banner.module.scss'
import Input from '../Input'
import Button from '../Button'

function Banner() {
  return (
    <section className={cls.wrapper}>
      <Container>
        <div className={cls.banner}>
          <div className={cls.content}>
            <h1 className={cls.title}>
              Take control of <span>your</span> healthcare
            </h1>
            <div className={cls.action}>
              <Input />
              <Button>Submit</Button>
            </div>
            <div className={cls.text}>
              Enter your e-mail above so you will be the first one to know when
              we launch!
            </div>
          </div>
          <div className={cls.image}>
            <Image
              src='/images/banner.png'
              width={546}
              height={557}
              alt='hand with phone'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner
