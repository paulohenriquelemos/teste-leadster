import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

import Logo from '../assets/logo.png'

export function Footer() {
  const liClass = 'text-sm text-text-light transition hover:text-primary'

  return (
    <footer className="grid place-items-center p-8">
      <div className="grid place-items-center">
        <Image src={Logo} alt="Logo Leadster" className="w-48" />
        <span className="mt-1 text-xs text-text-light">
          Transformando visitantes em clientes
        </span>
      </div>
      <div className="container mt-6 flex flex-wrap justify-between gap-8">
        <ul className="flex flex-col gap-1.5">
          <li className="mb-5 font-bold text-text-dark transition hover:text-primary">
            <Link href="#">Links Principais</Link>
          </li>
          <li className="text-sm text-text-light transition hover:text-primary">
            <Link href="#">Home</Link>
          </li>
          <li className={`${liClass}`}>
            <Link href="#">Ferramenta</Link>
          </li>
          <li className={`${liClass}`}>
            <Link href="#">Preços</Link>
          </li>
          <li className={`${liClass}`}>
            <Link href="#">Contatos</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-1.5">
          <li className="mb-5 font-bold text-text-dark transition hover:text-primary">
            <Link href="#">Cases</Link>
          </li>
          <li className="text-sm text-text-light transition hover:text-primary">
            <Link href="#">Geração de Leads B2B</Link>
          </li>
          <li className={`${liClass}`}>
            <Link href="#">Geração de Leads em Software</Link>
          </li>
          <li className={`${liClass}`}>
            <Link href="#">Geração de Leds em Imobiliária</Link>
          </li>
          <li className={`${liClass}`}>
            <Link href="#">Cases de Sucesso</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-1.5">
          <li className="mb-5 font-bold text-text-dark transition hover:text-primary">
            <Link href="#">Materiais</Link>
          </li>
          <li className="text-sm text-text-light transition hover:text-primary">
            <Link href="#">Blog</Link>
          </li>
          <li className={`${liClass}`}>
            <Link href="#">Parceria</Link>
          </li>
          <li className={`${liClass}`}>
            <Link href="#">Guia Definitivo</Link>
          </li>
          <li className={`${liClass}`}>
            <Link href="#">Materiais Gratuitos</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-1.5">
          <li className="mb-5 font-bold text-text-dark transition hover:text-primary">
            <Link href="#">Siga a Leadster</Link>
          </li>
          <li className="flex items-center gap-3 font-bold text-text-light">
            <Link
              href="#"
              title="Linkedin"
              className="grid h-10 w-10 place-items-center rounded-full bg-bg-gray transition hover:brightness-90"
            >
              in
            </Link>
            <Link
              href="#"
              title="Facebok"
              className="grid h-10 w-10 place-items-center rounded-full bg-bg-gray transition hover:brightness-90"
            >
              f
            </Link>
            <Link
              href="#"
              title="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-bg-gray transition hover:brightness-90"
            >
              <FaInstagram />
            </Link>
          </li>
          <li className="text-sm font-medium text-text-dark">
            <span>
              E-mail:{' '}
              <Link
                href="mailto:contato@leadster.com.br"
                rel="noopener noreferrer"
                target="_blank"
                className="text-text-light transition hover:text-primary"
              >
                contato@leadster.com.br
              </Link>
            </span>
          </li>
          <li className="text-sm font-medium text-text-dark">
            <span>
              Telefone:{' '}
              <Link
                href="https://api.whatsapp.com/send?phone=5542988289851"
                rel="noopener noreferrer"
                target="_blank"
                className="text-text-light transition hover:text-primary"
              >
                (42) 98828-9851
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </footer>
  )
}
