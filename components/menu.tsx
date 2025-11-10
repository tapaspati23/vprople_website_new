'use client'
import Link from 'next/link'
import React from 'react'
import type { MenuItem } from './menu-data'

export default function Menu({ data }: { data: MenuItem[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
  const closeTimeout = React.useRef<number | null>(null)
  const itemRefs = React.useRef<Array<HTMLLIElement | null>>([])
  const [alignRightMap, setAlignRightMap] = React.useState<Record<number, boolean>>({})

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const dropdownMaxWidth = 320 // px - used to detect overflow

  const openWithAlignment = (i: number) => {
    // compute whether dropdown would overflow to the right; if so, align to right
    const el = itemRefs.current[i]
    if (el) {
      const rect = el.getBoundingClientRect()
      const willOverflow = rect.left + dropdownMaxWidth > window.innerWidth - 12
      setAlignRightMap((m) => ({ ...m, [i]: willOverflow }))
    }
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setOpenIndex(i)
  }

  const handleMouseLeave = () => {
    closeTimeout.current = window.setTimeout(() => setOpenIndex(null), 120)
  }

  return (
    <nav aria-label="Main" role="navigation">
      <ul className="flex gap-8 text-sm items-start">
        {data.map((item, idx) => {
          const hasSub = Array.isArray(item.subMenu) && item.subMenu.length > 0
          return (
            <li
              key={idx}
              ref={(r) => { itemRefs.current[idx] = r }}
              className="relative"
              onMouseEnter={() => hasSub && openWithAlignment(idx)}
              onMouseLeave={() => hasSub && handleMouseLeave()}
            >
              {hasSub ? (
                <>
                  <button
                    aria-haspopup="true"
                    aria-expanded={openIndex === idx}
                    onClick={() => (openIndex === idx ? setOpenIndex(null) : openWithAlignment(idx))}
                    onFocus={() => openWithAlignment(idx)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary focus:outline-none focus:text-primary"
                  >
                    <span className="font-medium">{item.title}</span>
                    <span className="text-xs text-muted-foreground">▾</span>
                  </button>

                  <div
                    role="menu"
                    aria-hidden={openIndex !== idx}
                    className={`absolute top-full z-40 mt-2 w-[min(90vw,320px)] rounded-lg border border-primary/10 bg-background p-3 shadow-lg ring-1 ring-primary/5 transition-opacity duration-150 ${openIndex === idx ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'} ${alignRightMap[idx] ? 'right-0 left-auto' : 'left-0'}`}
                    onMouseEnter={() => openWithAlignment(idx)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul className="space-y-2">
                      {item.subMenu!.map((s, i) => (
                        <li key={i}>
                          <Link href={s.link} className="block rounded-md px-3 py-2 hover:bg-primary/5 hover:text-primary transition-colors">
                            <div className="font-medium text-sm">{s.title}</div>
                            {s.desc && <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link href={item.link || '#'} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  {item.title}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
