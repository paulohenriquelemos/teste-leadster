import Image from 'next/image'
import Link from 'next/link'

import teste from '../assets/asset-header.png'

export function Section01() {
  return (
    <div className="grid w-full place-items-center bg-bg-light py-36">
      <Link
        href="#"
        className="rounded-full rounded-bl-none border-2 border-primary px-3 py-1 text-xs font-bold uppercase text-primary transition hover:bg-primary hover:text-white"
      >
        webinars exclusivos
      </Link>
      <p className="mt-3 text-4xl text-text-dark">Menos Conversinha,</p>
      <p className="relative mt-2 border-b px-6 pb-4 text-7xl font-semibold text-primary">
        Mais Conversão
        <Image src={teste} alt="" className="absolute -top-1 right-0" />
      </p>
      <p className="mt-3 text-text-dark">
        Conheça as estratégias que <strong>mudaram o jogo</strong> e como
        aplicálas no seu negócio
      </p>
    </div>
  )
}
