import { ChangeEvent, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import { Card } from './Card'
import { ButtonBranch } from './ButtonBranch'

import 'swiper/css'
import 'swiper/css/pagination'

import dataJson from '../../json/data.json'

interface CardProps {
  id: string
  image: string
  title: string
  url: string
  createdAt: string
}

export function Section02() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    },
  }
  const [data, setData] = useState<CardProps[] | []>(dataJson)
  const [branch, setBranch] = useState('')
  const [selected, setSelected] = useState('')

  const cardPerPage = 9
  const paginationNumber = Math.ceil(data.length / cardPerPage)

  function handleChangeBranch(event: string) {
    if (event === branch) {
      setData(dataJson)
      setBranch('')
      return
    }
    setBranch(event)
    const dataFiltered = dataJson.filter((e) => e.type === event)

    setData(dataFiltered)
  }

  function handleChangeOrder(event: ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === 'createdAt') {
      const dataSorted = data.sort((a, b) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)
        return dateB.getTime() - dateA.getTime()
      })
      setData(dataSorted)
    } else if (event.target.value === '') {
      const dataInitial = dataJson.sort((a, b) => Number(a.id) - Number(b.id))

      setData(dataInitial)
      setBranch('')
    }
    setSelected(event.target.value)
  }

  return (
    <section className="p-8">
      <div className="flex justify-between gap-3 border-b pb-3">
        <div className="flex flex-wrap items-center gap-3">
          <ButtonBranch
            onPress={() => handleChangeBranch('agencias')}
            title="Agências"
            active={branch === 'agencias'}
          />
          <ButtonBranch
            onPress={() => handleChangeBranch('chatbot')}
            title="Chatbot"
            active={branch === 'chatbot'}
          />
          <ButtonBranch
            onPress={() => handleChangeBranch('marketing_digital')}
            title="Marketin Digital"
            active={branch === 'marketing_digital'}
          />
          <ButtonBranch
            onPress={() => handleChangeBranch('geracao_leads')}
            title="Geração de Leads"
            active={branch === 'geracao_leads'}
          />
          <ButtonBranch
            onPress={() => handleChangeBranch('midia_paga')}
            title="Mídiga Paga"
            active={branch === 'midia_paga'}
          />
        </div>
        <div className="space-x-2 whitespace-nowrap">
          <span className="mb-2 block text-end text-sm font-bold text-text-dark sm:mb-0 sm:inline">
            Ordenar por
          </span>
          <select
            name=""
            id=""
            onChange={handleChangeOrder}
            value={selected}
            className="rounded-lg border border-text-dark p-1 text-sm"
          >
            <option value=""></option>
            <option value="createdAt">Data de publicação</option>
            <option value="outro" disabled>
              Outro método
            </option>
          </select>
        </div>
      </div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.slice(0, paginationNumber).map((page, index) => {
          return (
            <SwiperSlide
              key={page.id}
              className="!grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {data
                .slice(cardPerPage * index, cardPerPage * index + cardPerPage)
                .map((card: CardProps) => {
                  return <Card key={card.id} card={card} />
                })}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
