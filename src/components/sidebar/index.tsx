'use client'

import { ChevronDown } from 'lucide-react'
import { CategoryWithListType, SidebarItemType, SidebarType } from './type'
import React, { useState } from 'react'
import Link from 'next/link'
import { sidebarData } from './data'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useAtom } from 'jotai'
import { menuAtom } from '@/app/store'

// sidebar data
const Sidebar = () => {
  const [animationParent] = useAutoAnimate({ duration: 100, easing: 'ease-in-out' })
  const [menu, setMenu] = useAtom(menuAtom)

  sidebarData
  return (
    <div ref={animationParent}>
      {menu && (
        <div className='md:hidden fixed top-[64px] left-0 bg-black/50 h-screen w-full z-10 backdrop-blur-sm'>
          <MainMenu className='bg-white dark:bg-black' />
        </div>
      )}
      <div className='hidden md:flex'>
        <MainMenu />
      </div>
    </div>
  )
}

const MainMenu = (props: { className?: string }) => {
  return (
    <div className={cn('flex flex-col gap-1 border-r w-[250px] h-full  py-3 p-2', props.className)}>
      <div className='flex flex-col gap-1 w-full'>
        {sidebarData.categoryWithoutList?.map((data, index) => (
          <SidebarItem
            key={index}
            {...{ ...data }}
          />
        ))}
      </div>
      {/* {sidebarData.categoryWithList && <br />} */}
      <div className='flex flex-col gap-1 w-full'>
        {sidebarData.categoryWithList?.map((data, index) => (
          <CategoryWithList
            key={index}
            {...{ ...data }}
          />
        ))}
      </div>
    </div>
  )
}

const SidebarItem = (props: SidebarItemType) => {
  const pathName = usePathname()
  const currentPath = pathName === props.href

  const { icon: Icon, activeIcon: ActiveIcon } = props

  const [subItem, setSubItem] = useState(false)

  const toggleSubItem = () => {
    setSubItem(!subItem)
  }

  return (
    <Link href={props.href ?? ''}>
      {/* left */}
      {/* icon */}
      <section
        className={cn(
          'w-full items-center flex transition-all rounded-md py-2 px-4 hover:bg-secondary justify-between',
          currentPath && 'bg-secondary'
        )}>
        <div className='flex items-center gap-2'>
          <div className='text-xl'>{currentPath ? <ActiveIcon /> : <Icon />}</div>
          <p>{props.title}</p>
        </div>
        {props.subItems && (
          <button onClick={toggleSubItem}>
            <ChevronDown />
          </button>
        )}
      </section>
      {props.subItems && subItem && (
        <section>
          {props.subItems.map((data, index) => (
            <Link href={data.href}>{data.title}</Link>
          ))}
        </section>
      )}
    </Link>
  )
}

const CategoryWithList = (props: CategoryWithListType) => {
  const pathName = usePathname()

  const [animationParent] = useAutoAnimate()

  const [categoryOpen, setCategoryOpen] = useState(false)
  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen)
  }
  return (
    <div
      ref={animationParent}
      className=' flex flex-col gap-1 w-full'>
      <button
        onClick={toggleCategory}
        className={cn('w-full flex transition-all rounded-md py-2 px-4 hover:bg-secondary justify-between')}>
        <h2 className='uppercase text-gray-400 text-sm'>{props.title}</h2>
        <ChevronDown className={cn('text-sm text-gray-500 transition-all', !categoryOpen && 'rotate-180')} />
      </button>
      {/* categories */}
      {categoryOpen && (
        <div className='pl-4'>
          {props.categories.map((data, index) => (
            <Link
              className={cn(
                'w-full flex rounded-md py-2 px-4 hover:bg-secondary',
                pathName === data.href && 'bg-secondary'
              )}
              href={data.href}
              key={index}>
              {data.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Sidebar
