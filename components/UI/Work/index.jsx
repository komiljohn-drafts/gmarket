import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Container from '../../Layout/Container'
import cls from './Work.module.scss'
import {
  BrowseSvg,
  CompareSvg,
  LeftBottomDecorator,
  LeftDecoratorSvg,
  RightDecoratorSvg,
  StoreSvg,
} from '../../../utils/svgs'
import { useWindowSize } from '../../../utils/useWindowSize'

function Work() {
  const size = useWindowSize()
  const [windowWidth, setWindowWidth] = useState('')

  useEffect(() => {
    if (size.width <= 960) {
      setWindowWidth('lg')
    }
  }, [size])

  return (
    <section className={cls.wrapper}>
      <Container>
        <div className={cls.work}>
          <section className={cls.left}>
            <div className={cls.image}>
              <div className={cls.decorator}>
                <LeftDecoratorSvg />
              </div>
              <Image
                src='/images/work-1.png'
                width={385}
                height={385}
                alt='work'
              />
              <div className={cls.small}>
                <CompareSvg />
              </div>
            </div>
            <div className={cls.content}>
              <h2 className={cls.title}>
                <span>Compare</span> prices at local hospitals near you
              </h2>
              <p className={cls.subtitle}>
                Find out how much a specific procedure may cost with your
                insurance plan or status. A simple search with your insurance
                and ZIP code shows you the most relevant prices for you.{' '}
              </p>
            </div>
          </section>
          <section className={cls.right}>
            <div className={cls.image}>
              <div className={cls.decorator}>
                <RightDecoratorSvg />
              </div>
              <Image
                src='/images/work-2.png'
                width={385}
                height={385}
                alt='work'
              />
              <div className={cls.small}>
                <BrowseSvg />
              </div>
            </div>
            <div className={cls.content}>
              <h2 className={cls.title}>
                <span>Browse</span> crowdsourced data at your fingertips
              </h2>
              <p className={cls.subtitle}>
                Published price lists from hospitals create the foundation of
                our results, but our data also contains verified costs from real
                patient bills. Read reviews from fellow patients about their
                experiences with your local hospital.
              </p>
            </div>
          </section>
          <section className={cls.leftBottom}>
            <div className={cls.image}>
              <div className={cls.decorator}>
                {windowWidth === 'lg' ? (
                  <LeftDecoratorSvg />
                ) : (
                  <LeftBottomDecorator />
                )}
              </div>
              <Image
                src='/images/work-3.png'
                width={385}
                height={385}
                alt='work'
              />
              <div className={cls.small}>
                <StoreSvg />
              </div>
            </div>
            <div className={cls.content}>
              <h2 className={cls.title}>
                Securely <span>store</span> &nbsp;healthcare information
              </h2>
              <p className={cls.subtitle}>
                We utilize bank-level security, 256-bit encryption to securely
                store your data in ways that even we cannot access your
                information. No need to fear losing important information ever
                again.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </section>
  )
}

export default Work
