import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Image from 'next/image'
import Card1 from '../Components/Cards/Card1'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Trending Causes</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Card1 imageSrc="https://kettocdn.gumlet.io/media/campaign/313000/313459/image/wid9009de6574548642cad2b3598ce3180905ad370c.png?w=300&dpr=1.0"/>
            <Card1 imageSrc="https://kettocdn.gumlet.io/media/campaign/212000/212655/image/wid1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=300&dpr=1.0"/>
            <Card1 imageSrc="https://kettocdn.gumlet.io/media/campaign/209000/209775/image/wid6131ef83702c8.jpeg?w=300&dpr=1.0"/>
            <Card1 imageSrc="https://kettocdn.gumlet.io/media/campaign/372000/372126/image/wid01ce2a07f56735f26b62aac7c317696e57f1c3f9.png?w=300&dpr=1.0"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
