'use client'

import * as React from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { MenuItem } from '@/types/menu'

type MenuItemProps = {
  item: MenuItem
  className?: string
}

export function MenuItemWithDropdown({ item, className }: MenuItemProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  if (!item.subMenu) {
    return (
      <Link
        href={item.link || '#'}
        className={cn(
          'text-muted-foreground hover:text-accent-foreground block duration-150',
          className
        )}
      >
        <span>{item.title}</span>
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-1 text-muted-foreground hover:text-accent-foreground',
          className
        )}
      >
        <span>{item.title}</span>
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 min-w-[240px] rounded-lg border bg-background p-4 shadow-lg">
          <ul className="space-y-2">
            {item.subMenu.map((subItem, index) => (
              <li key={index}>
                <Link
                  href={subItem.link}
                  className="block rounded-md p-2 hover:bg-muted"
                >
                  <div className="text-sm font-medium">{subItem.title}</div>
                  {subItem.desc && (
                    <div className="mt-1 text-xs text-muted-foreground">
                      {subItem.desc}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}