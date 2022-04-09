import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Sidebar from '../components/UI/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GMarket - Wallmart Store</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/icons/logo.png' />
      </Head>
      <Layout>
        <Sidebar />
        <div>321</div>
      </Layout>
    </div>
  )
}
