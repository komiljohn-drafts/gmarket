import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '../../Layout/Container'
import cls from './Follow.module.scss'
import Input from '../Input'
import Button from '../Button'

function Follow() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '300px', opacity: 0 },
      }}
      className={cls.wrapper}
    >
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
    </motion.section>
  )
}

export default Follow
