import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'

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
            <Card1 imageSrc="https://kettocdn.gumlet.io/media/campaign/313000/313459/image/wid9009de6574548642cad2b3598ce3180905ad370c.png?w=300&dpr=1.0" />
            <Card1 imageSrc="https://kettocdn.gumlet.io/media/campaign/212000/212655/image/wid1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=300&dpr=1.0" />
            <Card1 imageSrc="https://kettocdn.gumlet.io/media/campaign/209000/209775/image/wid6131ef83702c8.jpeg?w=300&dpr=1.0" />
            <Card1 imageSrc="https://kettocdn.gumlet.io/media/campaign/372000/372126/image/wid01ce2a07f56735f26b62aac7c317696e57f1c3f9.png?w=300&dpr=1.0" />
          </div>
          <div>
            <div className="flex flex-col items-center my-5">
              {/* <!-- Help text --> */}
              <span className="text-sm text-gray-700 dark:text-gray-700">
                Showing <span className="font-semibold text-gray-900">1</span> to <span className="font-semibold text-gray-900">10</span> of <span className="font-semibold text-gray-900 ">100</span> Entries
              </span>
              {/* <!-- Buttons --> */}
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Prev
                </button>
                <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
