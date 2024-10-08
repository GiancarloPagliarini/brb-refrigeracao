import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { MdOutlineLocalOffer } from 'react-icons/md'
import { FaWhatsapp } from "react-icons/fa";
import { IoBuildOutline } from "react-icons/io5";

const CarouselImages = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Carousel>
        <CarouselContent>
          <CarouselItem className='sm:hidden'>
            <img
              className="w-full h-full"
              src="./images/banner1.png"
              alt="Exemplo para dispositivos móveis"
            />
          </CarouselItem>
          <CarouselItem className='hidden sm:block'>
            <img
              className="w-full h-[662px]"
              src="./images/banner1.png"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className='hidden sm:block'>
            <img
              className="w-full h-[662px]"
              src="./images/banner2.png"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className='hidden sm:block'>
            <img
              className="w-full h-[662px]"
              src="../images/banner3.png"
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 transform ml-4 hidden sm:flex" />
        <CarouselNext className="absolute right-0 transform mr-4 hidden sm:flex" />
      </Carousel>
      <div className="shadow-xl bg-zinc-100 sm:w-1/2 w-72 rounded-lg absolute top-full -translate-y-1/2 p-8">
        <ul className="sm:flex gap-4 items-center justify-around block">
          <li className="rounded flex items-center gap-4 font-bold sm:text-lg text-sm cursor-pointer">
            <MdOutlineLocalOffer className="sm:text-5xl text-4xl text-blue-400" />
            Orçamentos
          </li>
          <div className="sm:w-0.5 sm:h-12 h-0.5 mt-5 mb-5 bg-slate-300">‎</div>
          <li className="rounded flex items-center gap-4 font-bold sm:text-lg text-sm cursor-pointer">
            <IoBuildOutline className="sm:text-5xl text-4xl text-blue-400" />
            O que nos diferencia?
          </li>
          <div className="sm:w-0.5 sm:h-12 h-0.5 mt-5 mb-5 bg-slate-300">‎</div>
          <li className="rounded flex items-center gap-4 font-bold sm:text-lg text-sm cursor-pointer">
            <FaWhatsapp className="sm:text-5xl text-4xl text-blue-400" />
            Entre em contato!
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CarouselImages
