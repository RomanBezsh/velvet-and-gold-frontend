import './Reviews.css'

const reviews = [
  { initials: 'ОК', name: 'Олена К.', date: '12 вересня 2026', item: 'Золоте кільце з діамантом', rating: 5, text: 'Замовляла каблучку на заручини. Приїхала за два дні, у подарунковій коробці, з сертифікатом. Діамант виблискує навіть краще, ніж на фото. Дуже задоволена якістю роботи та швидкістю доставки.' },
  { initials: 'АМ', name: 'Андрій М.', date: '3 жовтня 2026', item: 'Сережки-підвіски', rating: 5, text: 'Подарував дружині сережки на річницю. Менеджер допоміг із розміром і швидко відповів на всі питання. Дуже задоволений!' },
  { initials: 'ІЛ', name: 'Ірина Л.', date: '28 вересня 2026', item: 'Браслет із золота', rating: 4, text: 'Гарний браслет, виглядає дорого. Єдине, що довелося трохи почекати на доставку, але вартує того.' },
]

export default function Reviews() {
  return <section className="vg-reviews" id="reviews" aria-labelledby="vg-reviews-title">
    <div className="vg-reviews-inner">
      <h2 id="vg-reviews-title" className="vg-reviews-title">Відгуки наших клієнтів</h2>
      <div className="vg-reviews-grid">{reviews.map(review => <article className="vg-review" key={review.name}>
        <span className="vg-review-quote" aria-hidden="true">“</span>
        <p className="vg-review-text">{review.text}</p>
        <div className="vg-review-bottom">
          <div className="vg-review-person"><span className="vg-review-avatar">{review.initials}</span><div><div className="vg-review-name">{review.name} <span aria-label="Підтверджений покупець" title="Підтверджений покупець">✓</span></div><div className="vg-review-item">{review.item}</div></div></div>
          <time className="vg-review-date">{review.date}</time>
        </div>
        <div className="vg-review-stars" aria-label={`${review.rating} із 5 зірок`}>{Array.from({length: 5}, (_, i) => <span className={i < review.rating ? 'is-active' : ''} key={i}>★</span>)}</div>
      </article>)}</div>
    </div>
  </section>
}
