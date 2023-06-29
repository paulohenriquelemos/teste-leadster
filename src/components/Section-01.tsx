import Image from 'next/image'
import Link from 'next/link'

import teste from '../assets/asset-header.png'

export function Section01() {
  return (
    <section className="grid w-full place-items-center bg-bg-light px-8 py-36">
      <Link
        href="#"
        className="rounded-full rounded-bl-none border-2 border-primary px-3 py-1 text-xs font-bold uppercase text-primary transition hover:bg-primary hover:text-white"
      >
        webinars exclusivos
      </Link>
      <p className="mt-3 text-2xl text-text-dark md:text-4xl">
        Menos Conversinha,
      </p>
      <p className="relative mt-2 border-b px-6 pb-4 text-4xl font-semibold text-primary md:text-7xl">
        Mais Conversão
        <Image
          src={teste}
          alt=""
          className="absolute -top-1 right-0 w-9 md:w-12"
        />
      </p>
      <p className="mt-3 text-center text-text-dark">
        Conheça as estratégias que <strong>mudaram o jogo</strong> e como
        aplicálas no seu negócio
      </p>
    </section>
  )
}
