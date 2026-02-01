"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSuccessStoriesOpen, setIsSuccessStoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const successStoriesDropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const successStoriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSolutionsEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsSolutionsOpen(true);
    setIsSuccessStoriesOpen(false);
  };

  const handleSolutionsLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 200);
  };

  const handleSuccessStoriesEnter = () => {
    if (successStoriesTimeoutRef.current) {
      clearTimeout(successStoriesTimeoutRef.current);
      successStoriesTimeoutRef.current = null;
    }
    setIsSuccessStoriesOpen(true);
    setIsSolutionsOpen(false);
  };

  const handleSuccessStoriesLeave = () => {
    successStoriesTimeoutRef.current = setTimeout(() => {
      setIsSuccessStoriesOpen(false);
    }, 200);
  };

  const handleSolutionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsSuccessStoriesOpen(false);
  };

  const handleSuccessStoriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSuccessStoriesOpen(!isSuccessStoriesOpen);
    setIsSolutionsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (successStoriesTimeoutRef.current)
        clearTimeout(successStoriesTimeoutRef.current);
    };
  }, []);

  return (
    <header className="tc-header">
      <div className="tc-header-container">
        <Link href="/" className="tc-header-logo">
          <Image
            src="/images/TOYCYCLE-LOGO-HQ-white.webp"
            alt="Toycycle for Brands – inventory recovery and resale for toy brands"
            width={180}
            height={52}
            className="tc-logo-image"
            priority
          />
        </Link>
        <nav className="tc-header-nav">
          <Link href="/" className="tc-nav-link">
            Home
          </Link>
          <div
            ref={dropdownRef}
            className="tc-nav-dropdown"
            onMouseEnter={handleSolutionsEnter}
            onMouseLeave={handleSolutionsLeave}
          >
            <button
              className="tc-nav-link tc-nav-dropdown-toggle"
              onClick={handleSolutionsClick}
              onMouseEnter={handleSolutionsEnter}
              aria-expanded={isSolutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <span className="tc-dropdown-arrow">▼</span>
            </button>
            {isSolutionsOpen && (
              <div
                className="tc-dropdown-menu"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <Link
                  href="/b-stock-drop-ship"
                  className="tc-dropdown-item"
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  Toycycle Resale Direct
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
          <div
            ref={successStoriesDropdownRef}
            className="tc-nav-dropdown"
            onMouseEnter={handleSuccessStoriesEnter}
            onMouseLeave={handleSuccessStoriesLeave}
          >
            <button
              className="tc-nav-link tc-nav-dropdown-toggle"
              onClick={handleSuccessStoriesClick}
              onMouseEnter={handleSuccessStoriesEnter}
              aria-expanded={isSuccessStoriesOpen}
              aria-haspopup="true"
            >
              Success Stories
              <span className="tc-dropdown-arrow">▼</span>
            </button>
            {isSuccessStoriesOpen && (
              <div
                className="tc-dropdown-menu"
                onMouseEnter={handleSuccessStoriesEnter}
                onMouseLeave={handleSuccessStoriesLeave}
              >
                <Link
                  href="/success-stories/loog"
                  className="tc-dropdown-item"
                  onClick={() => setIsSuccessStoriesOpen(false)}
                >
                  Loog
                </Link>
                <Link
                  href="/success-stories/plantoys"
                  className="tc-dropdown-item"
                  onClick={() => setIsSuccessStoriesOpen(false)}
                >
                  PlanToys
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="tc-nav-link tc-nav-cta">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
