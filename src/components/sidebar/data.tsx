'use client'

import { FaCog, FaHome, FaUser } from 'react-icons/fa'
import { SidebarType } from './type'
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'

// Sample data
export const sidebarData: SidebarType = {
  categoryWithoutList: [
    {
      icon: AiOutlineHome,
      activeIcon: FaHome, // Using the same icon for active state
      title: 'Home',
      href: '/home',
    },
    {
      icon: AiOutlineUser,
      activeIcon: FaUser, // Using the same icon for active state
      title: 'Profile',
      href: '/profile',
    },
    {
      icon: AiOutlineSetting,
      activeIcon: FaCog, // Using the same icon for active state
      title: 'Settings',
      href: '/settings',
    },
  ],
  categoryWithList: [
    {
      title: 'Analytics',
      categories: [
        {
          title: 'Overview',
          href: '/analytics/overview',
        },
        {
          title: 'Reports',
          href: '/analytics/reports',
        },
      ],
    },
    {
      title: 'Users',
      categories: [
        {
          title: 'All Users',
          href: '/users/all',
        },
        {
          title: 'Active Users',
          href: '/users/active',
        },
      ],
    },
  ],
}
export default sidebarData
