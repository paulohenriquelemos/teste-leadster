import { Header } from '@/components/Header'
import { Section01 } from '@/components/Section-01'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Section01 />
      </main>
      <Footer />
    </>
  )
}
