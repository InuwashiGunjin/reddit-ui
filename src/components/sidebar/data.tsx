import { IconType } from 'react-icons'

import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'
import { RiSettings3Line } from 'react-icons/ri'

export type SidebarItemType = {
  icon: IconType
  activeIcon: IconType
  title: string
  href?: string
  subItems?: {
    title: string
    href: string
  }[]
}

export type CategoryWithListType = {
  title: string
  categories: SidebarItemType[]
}

export type SidebarType = {
  categoryWithoutList: SidebarItemType[]
  categoryWithList: CategoryWithListType[]
}

// sample data for SidebarType
export const sampleSidebarData: SidebarType = {
  categoryWithoutList: [
    {
      icon: AiOutlineHome,
      activeIcon: AiOutlineHome,
      title: 'Home',
      href: '/home',
    },
    {
      icon: AiOutlineUser,
      activeIcon: AiOutlineUser,
      title: 'Profile',
      href: '/profile',
    },
    {
      icon: RiSettings3Line,
      activeIcon: RiSettings3Line,
      title: 'Settings',
      href: '/settings',
    },
  ],
  categoryWithList: [
    {
      title: 'Main',
      categories: [
        {
          icon: AiOutlineHome,
          activeIcon: AiOutlineHome,
          title: 'Home',
          href: '/home',
          subItems: [
            {
              title: 'Profile',
              href: '/profile',
            },
            {
              title: 'Settings',
              href: '/settings',
            },
            {
              title: 'Main',
              href: '/main',
            },
            {
              title: 'Account',
              href: '/account',
            },
          ],
        },
        {
          icon: AiOutlineUser,
          activeIcon: AiOutlineUser,
          title: 'Profile',
          href: '/profile',
        },
      ],
    },
    {
      title: 'Settings',
      categories: [
        {
          icon: RiSettings3Line,
          activeIcon: RiSettings3Line,
          title: 'Settings',
          href: '/settings',
        },
        {
          icon: RiSettings3Line,
          activeIcon: RiSettings3Line,
          title: 'Account Settings',
          href: '/account-settings',
          subItems: [
            {
              title: 'Profile',
              href: '/profile',
            },
            {
              title: 'Settings',
              href: '/settings',
            },
            {
              title: 'Main',
              href: '/main',
            },
            {
              title: 'Account',
              href: '/account',
            },
          ],
        },
      ],
    },
    {
      title: 'Notification',
      categories: [
        {
          icon: RiSettings3Line,
          activeIcon: RiSettings3Line,
          title: 'Notification',
          href: '/notification',
        },
        {
          icon: RiSettings3Line,
          activeIcon: RiSettings3Line,
          title: 'Other',
          href: '/other',
          subItems: [
            {
              title: 'Profile',
              href: '/profile',
            },
            {
              title: 'Settings',
              href: '/settings',
            },
            {
              title: 'Main',
              href: '/main',
            },
            {
              title: 'Account',
              href: '/account',
            },
          ],
        },
      ],
    },
  ],
}
export default sampleSidebarData
