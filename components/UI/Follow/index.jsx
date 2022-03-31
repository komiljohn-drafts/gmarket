import React from 'react'
import Image from 'next/image'
import Container from '../../Layout/Container'
import cls from './Follow.module.scss'
import Input from '../Input'
import Button from '../Button'

function Follow() {
  return (
    <section className={cls.wrapper}>
      <Container>
        <div className={cls.follow}>
          <h2 className={cls.title}>You should be in control</h2>
          <p className={cls.subtitle}>
            Sign up if you’re ready to take control of your healthcare. You’ll
            be notified once we open to users.
          </p>
          <div>
            <Input />
          </div>
          <Button>Be the first to know</Button>
        </div>
      </Container>
    </section>
  )
}

export default Follow
