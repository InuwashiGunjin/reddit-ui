import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { MoreHorizontal, QrCode, Search } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

type Props = {}
export default function Navbar({}: Props) {
  return (
    <div className='py-3 border-b flex justify-between gap-2 '>
      {/* logo */}
      <Link
        href={'/'}
        className='flex items-center gap-1 text-2xl min-w-28'>
        <img
          className='h-8 w-auto'
          src={'/redditlogo.svg'}
          alt=''
        />
        <p className='font-bold text-[#FF4500] '>reddit</p>
      </Link>

      {/* searchbar */}
      <div className='w-full max-w-[700px] flex items-center relative'>
        <Search
          size={20}
          className='absolute left-3 text-muted-foreground'
        />
        <Input
          className='rounded-full w-full pl-10 focus-visible:ring-orange-600'
          placeholder='Search'
        />
      </div>

      {/* buttons */}
      <div className='flex items-center gap-2'>
        <Button
          variant='secondary'
          className='flex gap-2 bg-[#eaedef] hover:bg-[#eaedef]/60 hidden md:flex transition-all'>
          <QrCode
            size={20}
            className=''
          />
          Get app
        </Button>
        <Button className='bg-[#D93A14] hover:bg-[#D93A14]/80'>Log in</Button>
        <Popover>
          <PopoverTrigger>
            <Button
              variant='secondary'
              className='w-1- h10 p-2'>
              <MoreHorizontal />
            </Button>
          </PopoverTrigger>
          <PopoverContent align='start'>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
