import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Header from '@/components/Header'
import Team from '@/components/Team'
import Company from '@/components/Company'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between ">
         
    <Header/>
    <Hero/>
    <Product/>
    <Team/>
    <Company/>
    <Footer/>
         
         
         
  </main>
  )
}
