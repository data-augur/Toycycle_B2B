'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function Header() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsSolutionsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false)
    }, 200)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsSolutionsOpen(!isSolutionsOpen)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="tc-header">
      <div className="tc-header-container">
        <Link href="/" className="tc-header-logo">
          <Image 
            src="/images/TOYCYCLE-LOGO-HQ-white.webp" 
            alt="Toycycle Logo" 
            width={180}
            height={52}
            className="tc-logo-image"
            priority
          />
        </Link>
        <nav className="tc-header-nav">
          <Link href="/" className="tc-nav-link">Home</Link>
          <div 
            ref={dropdownRef}
            className="tc-nav-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="tc-nav-link tc-nav-dropdown-toggle"
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              aria-expanded={isSolutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <span className="tc-dropdown-arrow">▼</span>
            </button>
            {isSolutionsOpen && (
              <div 
                className="tc-dropdown-menu"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href="/b-stock-drop-ship" 
                  className="tc-dropdown-item"
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  B-Stock Drop Ship
                </Link>
                <Link 
                  href="/returns-management" 
                  className="tc-dropdown-item"
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  Returns Management
                </Link>
                <Link 
                  href="/resale-as-a-service" 
                  className="tc-dropdown-item"
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  Resale as a Service
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="tc-nav-link tc-nav-cta">Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}

