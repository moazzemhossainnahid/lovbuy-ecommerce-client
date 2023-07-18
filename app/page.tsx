import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Team from '@/components/Team'
import Company from '@/components/Company'
import ReadyToTalk from '@/components/ReadyToTalk'
import TrustedPartners from '@/components/TrustedPartners'

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col justify-between ">
      <Hero />
      <Product />
      <Team />
      {/* <Company /> */}
      <TrustedPartners />
      <ReadyToTalk />
    </main>
  )
}
