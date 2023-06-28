import Image from 'next/image'

import Logo from '../assets/logo.png'

export function Header() {
  return (
    <div className="grid place-items-center p-7">
      <Image src={Logo} alt="Logo Leadster" />
    </div>
  )
}
