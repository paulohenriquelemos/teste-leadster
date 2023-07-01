import { Header } from '@/components/Header'
import { Section01 } from '@/components/Section-01'
import { Section02 } from '@/components/Section-02'
import { Section03 } from '@/components/Section-03'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Section01 />
        <Section02 />
        <Section03 />
      </main>
      <Footer />
    </>
  )
}
