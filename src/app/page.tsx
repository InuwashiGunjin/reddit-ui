import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ArrowBigDown, ArrowBigUp, MessageSquare, MoreHorizontal, Upload } from 'lucide-react'

type HomeProps = {
  currentPage?: string
}

export default function Home(props: HomeProps) {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-3xl font-semibold capitalize'>{props.currentPage || 'Home'}</h2>
      <section className='w-full flex items-center justify-center'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full'>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index + 1}
                className='basis-1/1 sm:basis-1/2 lg:basis-1/3'>
                <NewsCard bannerImg={index + 1} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-3' />
          <CarouselNext className='right-16' />
        </Carousel>
      </section>

      {/* h-662px */}
      {/* w-750px */}
      <section className='flex gap-3'>
        {/* left main */}
        <main className='flex flex-col gap-3'>
          <PostCard />
          <PostCard />
          <PostCard />
        </main>

        {/* right sidebar */}
        <aside className='w-full h-fit max-w-80 border flex flex-col gap-2 rounded-xl py-3 px-2 sticky top-0 bg-secondary hidden lg:flex'>
          <p className='px-3 font-semibold'>POPULAR COMMUNITIES</p>
          <section className='flex flex-col gap-3'>
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </section>
        </aside>
      </section>
    </div>
  )
}

const CommunityCard = () => {
  const imgNumber = 30
  const communityImg = `https://api.dicebear.com/7.x/rings/svg?seed=Snickers${imgNumber}`
  return (
    <div className='flex gap-3 rounded-full px-3 py-1.5 cursor-pointer'>
      {/* left */}
      <img
        className='h-10 w-10'
        src={communityImg}
        alt='community image'
      />
      <div className='flex flex-col gap-1'>
        {/* community name */}
        <p className='text-sm text-gray-600'>r/Serbia</p>
        <p className='text-xs text-gray-400'>1,124,322 members</p>
        {/* members */}
      </div>
    </div>
  )
}

const PostCard = () => {
  const imgNumber = 1
  const avatarImg = `https://api.dicebear.com/7.x/adventurer/svg?seed=Baby${imgNumber}&radius=50&backgroundType=gradientLinear&earrings=variant01,variant03,variant04,variant05,variant06`
  return (
    <div className='w-full rounded-xl bg-background flex flex-col gap-3  pb-2 overflow-auto border h-auto'>
      <section className='flex justify-between gap-2 p-2'>
        {/* left */}
        <div className='flex items-center gap-1'>
          <img
            className='h-12 w-12'
            src={avatarImg}
            alt='user image'
          />
          {/* username */}
          <p className='text-sm text-gray-600'>mzivkovic9</p>
          {/* time */}
          <p className='text-sm text-gray-400'>7 hr. ago</p>
        </div>

        {/* right side */}
        <div className='flex gap-3'>
          <Button className='bg-blue-500 text-white font-bold rounded-full text-xs py-1 px-3'>Join</Button>
          <Button
            variant='secondary'
            className='w-10 h-10 p-2 rounded-full'>
            <MoreHorizontal />
          </Button>
        </div>
      </section>
      <p className='font-bold px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolore!</p>
      {/*  */}
      <div className='w-full h-[550px] bg-black rounded-2xl'>
        <img
          className='h-full w-full'
          src={`https://api.slingacademy.com/public/sample-photos/${50}.jpeg`}
          alt=''
        />
      </div>

      <div className='flex items-center gap-3 px-2 pt-3'>
        <div className='bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2 rounded-full p-1'>
          <button className='p-2 rounded-full'>
            <ArrowBigUp />
          </button>
          <p>699</p>
          <button className='p-2 rounded-full'>
            <ArrowBigDown />
          </button>
        </div>
        <Button
          variant='secondary'
          className='flex items-center gap-1 rounded-full'>
          <MessageSquare />
          144
        </Button>
        <Button
          variant='secondary'
          className='flex items-center gap-1 rounded-full'>
          <Upload />
          Share
        </Button>
      </div>
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
