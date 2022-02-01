import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  )
}
