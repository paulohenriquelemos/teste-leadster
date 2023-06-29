import { Header } from '@/components/Header'
import { Section01 } from '@/components/Section-01'
import { Footer } from '@/components/Footer'
import { Section03 } from '@/components/Section-03'

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Section01 />
        <Section03 />
      </main>
      <Footer />
    </>
  )
}
