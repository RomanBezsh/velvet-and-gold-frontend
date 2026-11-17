import { useEffect, useState } from 'react'
import './HomeSections.css'

const banners = [
  '/banners/banner-1.png', '/banners/banner-2.png',
  '/banners/banner-3.png', '/banners/banner-4.png', '/banners/banner-5.png',
]

const categories = [
  { title: 'КАБЛУЧКИ', href: '/catalog/rings', icon: <><circle cx="32" cy="39" r="15"/><path d="M23 25l9-13 9 13-9 7zM23 25h18M27 13h10M32 12v20"/></> },
  { title: 'СЕРЕЖКИ', href: '/catalog/earrings', icon: <><path d="M19 14c-9 0-9 14 0 14s9-14 0-14ZM45 14c-9 0-9 14 0 14s9-14 0-14ZM19 28v10l-7 12 7 5 7-5-7-12M45 28v10l-7 12 7 5 7-5-7-12"/><circle cx="19" cy="20" r="2"/><circle cx="45" cy="20" r="2"/></> },
  { title: 'КОЛЬЄ', href: '/catalog/necklaces', icon: <><path d="M10 15c5 18 14 27 22 27s17-9 22-27M26 42l6 9 6-9M32 51v4"/><circle cx="32" cy="42" r="3"/></> },
  { title: 'БРАСЛЕТИ', href: '/catalog/bracelets', icon: <><path d="M18 20c8-8 24-8 32 1 9 11-1 28-15 29-14 1-26-8-25-20 0-4 3-8 8-10ZM16 24c7-6 21-7 29 1M13 35c9 11 27 13 38 2"/><circle cx="49" cy="22" r="3"/></> },
]

export default function HomeSections() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return undefined
    const timer = window.setInterval(() => setActive(current => (current + 1) % banners.length), 5000)
    return () => window.clearInterval(timer)
  }, [paused])
  const move = direction => setActive(current => (current + direction + banners.length) % banners.length)

  return (
    <main className="vg-home-sections">
      <section className="vg-hero" aria-label="Ювелірні колекції" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }}>
        <div className="vg-hero-track">
          {banners.map((src, index) => <img key={src} className={`vg-hero-slide ${index === active ? 'is-active' : ''}`} src={src} alt={`Ювелірна колекція Velvet & Gold — банер ${index + 1}`} aria-hidden={index !== active} />)}
        </div>
        <button className="vg-hero-arrow vg-hero-prev" type="button" aria-label="Попередній банер" onClick={() => move(-1)}>‹</button>
        <button className="vg-hero-arrow vg-hero-next" type="button" aria-label="Наступний банер" onClick={() => move(1)}>›</button>
        <div className="vg-hero-dots" aria-label="Вибір банера">
          {banners.map((src, index) => <button key={src} type="button" aria-label={`Показати банер ${index + 1}`} aria-current={index === active ? 'true' : undefined} className={`vg-hero-dot ${index === active ? 'is-active' : ''}`} onClick={() => setActive(index)} />)}
        </div>
      </section>
      <nav className="vg-categories" aria-label="Категорії ювелірних прикрас">
        {categories.map(category => <a className="vg-category" key={category.title} href={category.href}>
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{category.icon}</svg>
          <span>{category.title}</span>
        </a>)}
      </nav>
    </main>
  )
}
