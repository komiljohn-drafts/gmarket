import React from 'react'
import Container from '../../Layout/Container'
import cls from './Offers.module.scss'
import {
  ArrowDecorationSvg,
  DocSvg,
  FolderSvg,
  UserSvg,
} from '../../../utils/svgs'

function Offers() {
  const data = [
    {
      id: 1,
      boldText: '3 million',
      icon: <DocSvg />,
      bgColor: '#EBEEF8',
      title: `Over <span>3 million</span> data points from 100+ hospitals in NYC`,
      subtitle:
        'Data includes discounted cash prices (uninsured) and insurance-specific negotiated charges.',
    },
    {
      id: 2,
      boldText: '3 million',
      icon: <FolderSvg />,
      bgColor: '#F8EBD0',
      title: `Files stored using high-level <span>encryption</span>`,
      subtitle:
        'Between hospital visits, lab tests, and doctor’s appointments, the average person in the United States racks up quite a lot of medical information. We are here to help.',
    },
    {
      id: 3,
      boldText: '3 million',
      icon: <UserSvg />,
      bgColor: '#FF52521A',
      title: `<span>Seamless sync</span> between existing healthcare accounts`,
      subtitle:
        'Whether you use MyChart or another portal, you can easily import your information. If your provider does not offer an online portal, we offer you ways to scan, upload, and secure your information.',
    },
  ]

  return (
    <section className={cls.wrapper}>
      <Container>
        <div className={cls.offers}>
          <div className={cls.arrow}>
            <ArrowDecorationSvg />
          </div>
          <h2 className={cls.title}>What do we offer?</h2>
          <p className={cls.subtitle}>
            The U.S. healthcare system is broken. Patients are too often left
            feeling powerless. At Finestra, we know there is a better way.
            Patients deserve control.
          </p>
          {data.map((offer) => (
            <section key={offer.id} className={cls.offer}>
              <div
                style={{ backgroundColor: offer.bgColor }}
                className={cls.image}
              >
                {offer.icon}
              </div>
              <h3 dangerouslySetInnerHTML={{ __html: offer.title }} />
              <p>{offer.subtitle}</p>
              <div></div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Offers
