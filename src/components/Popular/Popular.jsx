import { useState } from 'react'
import './Popular.css'

const products = [
  { id: 1, name: 'Золоте кільце з діамантом', category: 'КАБЛУЧКИ', metal: 'Золото 585', price: '18 900 ₴', oldPrice: '23 100 ₴', badge: 'НОВИНКА' },
  { id: 2, name: 'Золоте кільце з діамантом', category: 'КАБЛУЧКИ', metal: 'Золото 585', price: '18 900 ₴' },
  { id: 3, name: 'Золоте кільце з діамантом', category: 'КАБЛУЧКИ', metal: 'Золото 585', price: '18 900 ₴', oldPrice: '23 100 ₴', badge: 'НОВИНКА' },
  { id: 4, name: 'Золоте кільце з діамантом', category: 'КАБЛУЧКИ', metal: 'Золото 585', price: '18 900 ₴', oldPrice: '23 100 ₴', unavailable: true },
]

export default function Popular() {
  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])
  const toggleFavorite = id => setFavorites(items => items.includes(id) ? items.filter(item => item !== id) : [...items, id])
  const addToCart = id => setCart(items => items.includes(id) ? items : [...items, id])

  return <section className="vg-popular" id="popular" aria-labelledby="vg-popular-title">
    <div className="vg-popular-inner">
      <h2 id="vg-popular-title" className="vg-popular-title">Популярне</h2>
      <div className="vg-popular-grid">
        {products.map(product => <article className={`vg-product ${product.unavailable ? 'is-unavailable' : ''}`} key={product.id}>
          <div className="vg-product-image-wrap">
            <img src="/products/diamond-ring.png" alt="Сріблясте кільце з прозорим каменем" className="vg-product-image" />
            {product.badge && <span className="vg-product-badge">{product.badge}</span>}
            {product.unavailable && <span className="vg-product-badge vg-product-badge-muted">НЕМАЄ В НАЯВНОСТІ</span>}
          </div>
          <div className="vg-product-details">
            <span className="vg-product-category">{product.category}</span>
            <h3 className="vg-product-name">{product.name}</h3>
            <span className="vg-product-metal">{product.metal}</span>
            <div className="vg-product-prices"><strong>{product.price}</strong>{product.oldPrice && <del>{product.oldPrice}</del>}</div>
            <div className="vg-product-actions">
              <button className="vg-product-cart" type="button" disabled={product.unavailable} onClick={() => addToCart(product.id)}>{product.unavailable ? 'Немає в наявності' : cart.includes(product.id) ? 'Додано ✓' : 'До кошика'}</button>
              <button className={`vg-product-heart ${favorites.includes(product.id) ? 'is-selected' : ''}`} type="button" aria-label={favorites.includes(product.id) ? 'Прибрати з обраного' : 'Додати в обране'} aria-pressed={favorites.includes(product.id)} onClick={() => toggleFavorite(product.id)}><svg viewBox="0 0 24 24" fill={favorites.includes(product.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.7"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg></button>
            </div>
          </div>
        </article>)}
      </div>
      <a className="vg-popular-all" href="/catalog">Дивитися всі <span aria-hidden="true">→</span></a>
    </div>
  </section>
}
