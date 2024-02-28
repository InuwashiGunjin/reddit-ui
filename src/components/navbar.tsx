'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Menu, MoreHorizontal, QrCode, Search } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from './toggle-dark-mode'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useAtom } from 'jotai'
import { menuAtom } from '@/app/store'

type Props = {}
const Navbar = ({}: Props) => {
  const [menu, setMenu] = useAtom(menuAtom)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className='py-3 border-b flex justify-between gap-2 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20 h-[64px]'>
      {/* logo */}
      <button
        onClick={toggleMenu}
        className='rounded-full min-h-12 min-w-12 transition-all p-0 flex items-center justify-center hover:bg-secondary md:hidden'>
        <Menu size={20} />
      </button>
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
        <ModeToggle />

        <Button
          variant='secondary'
          className='flex gap-2  hidden md:flex transition-all'>
          <QrCode
            size={20}
            className=''
          />
          Get app
        </Button>
        <Button className='bg-[#D93A14] hover:bg-[#D93A14]/80'>Log in</Button>

        <Popover>
          <PopoverTrigger className='hidden sm:flex'>
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
export default Navbar
