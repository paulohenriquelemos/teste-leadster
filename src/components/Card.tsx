import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { BsPlayFill } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'
import { CardDownload } from './CardDownload'

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jakarta',
})

interface CardProps {
  card: {
    id: string
    image: string
    title: string
    url: string
  }
}

export function Card({ card }: CardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <div className="group w-full cursor-pointer overflow-hidden rounded-2xl shadow-lg outline-none">
          <div className="relative before:absolute before:block before:h-full before:w-full before:transition group-hover:before:bg-primary group-hover:before:opacity-50">
            <Image
              src={card.image}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-full"
            />
            <BsPlayFill
              size={90}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition group-hover:opacity-100"
            />
          </div>
          <h3 className="p-4 text-base font-bold text-text-dark transition group-hover:text-primary">
            {card.title}
          </h3>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal forceMount className={`${jakarta.variable} font-sans`}>
        <Transition show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Content
              className={`fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border-t-[3px] border-primary bg-white ${jakarta.variable} font-sans`}
            >
              <Dialog.Title asChild>
                <h3 className="px-12 py-4 text-center text-xl font-bold text-text-dark">
                  <span className="text-primary">Webnar: </span>
                  {card.title}
                </h3>
              </Dialog.Title>
              <Dialog.Description>
                <div>
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${card.url}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h5 className="border-b pb-2 font-bold text-text-dark">
                    Descrição
                  </h5>
                  <p className="pt-2 text-text-dark">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed minima quos voluptas in ex aliquam ipsa expedita esse
                    eum labore. Maxime ea dolorem consectetur ratione aperiam
                    amet voluptas dolor itaque!
                  </p>
                  <h5 className="border-b py-2 font-bold text-text-dark">
                    Downloads
                  </h5>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <CardDownload title="Spreadsheet.xls" color="green" />
                    <CardDownload title="Document.doc" color="primary" />
                    <CardDownload title="Presentation.ppt" color="yellow" />
                  </div>
                </div>
              </Dialog.Description>
              <Dialog.Close asChild>
                <button className="absolute right-1 top-1" aria-label="Close">
                  <IoMdClose size={24} className="text-text-light" />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Transition.Child>
        </Transition>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
