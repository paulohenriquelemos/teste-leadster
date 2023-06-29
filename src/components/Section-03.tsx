import Image from 'next/image'
import Link from 'next/link'

import imgComparativo from '../assets/comparativo_img_CTA.png'
import imgSelo from '../assets/selo_RD.png'
import imgCard from '../assets/no-card-dark.webp'
import imgRating from '../assets/rating.webp'

export function Section03() {
  return (
    <section className="w-full bg-bg-light p-8">
      <div className="container mx-auto flex flex-col gap-5 lg:flex-row">
        <div className="flex-1">
          <Image src={imgComparativo} alt="Comparativo" />
        </div>
        <div className="flex-1">
          <div>
            <h3 className="text-2xl font-semibold text-text-dark sm:text-3xl">
              Pronto para triplicar sua
            </h3>
            <strong className="text-2xl text-text-dark sm:text-3xl">
              Geração de Leads?
            </strong>
          </div>
          <span className="block border-b-2 pb-4 pt-2 text-sm text-text-dark sm:text-base">
            Criação e ativação em <strong>4 minutos</strong>.
          </span>
          <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="#"
              className="grid h-full place-items-center rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase text-white"
            >
              ver demonstração
            </Link>
            <Image src={imgSelo} alt="Selo" />
          </div>
          <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-0 lg:justify-start">
            <div className="flex items-center">
              <Image src={imgCard} alt="No Card" className="w-[0.875rem]" />
              <span className="ml-2 flex text-xs">
                Não é necessário Cartão de Crédito
                <span className="ml-1 hidden sm:block">| </span>
              </span>
            </div>
            <div className="flex items-center">
              <Image src={imgRating} alt="Rating" className="ml-1 w-16" />
              <span className="ml-1 text-xs">
                <strong>4.9</strong>/5
              </span>
              <span className="ml-1 text-xs">média de satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
