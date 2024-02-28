import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const dataForSlider = {}

export default function Home() {
  return (
    <div>
      <section className='w-full flex items-center justify-center'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-[calc(100%-100px)] '>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index + 1}
                className='basis-1/3'>
                <NewsCard bannerImg={index + 1} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  )
}

type NewCardType = {
  bannerImg: number
}

const NewsCard = (props: NewCardType) => {
  return (
    <div className='h-[210px] w-[280px] relative rounded-lg overflow-hidden text-white flex items-end'>
      <img
        className='absolute top-0 left-0 h-full
         w-full z-10 brightness-50'
        src={`https://api.slingacademy.com/public/sample-photos/${props.bannerImg}.jpeg`}
        alt=''
      />
      <section className='flex flex-col gap-3 z-20 relative p-2'>
        <h2 className='text-2xl font-bold w-[260px] truncate'>Lorem ipsum dolor sit</h2>
        <p className='w-[260px] truncate text-slate-100 text-sm'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, error?
        </p>

        <div className='flex gap-2 items-center'>
          <img
            className='h-8 w-8 rounded-full'
            src={`https://api.slingacademy.com/public/sample-photos/${props.bannerImg + 12}.jpeg`}
            alt=''
          />
          <p className='text-sm'>Lorem ipsum dolor sit.</p>
        </div>
      </section>
    </div>
  )
}
