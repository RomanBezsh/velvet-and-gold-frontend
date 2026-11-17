import './Benefits.css'
const benefits = [
  { title: 'Безкоштовна доставка', detail: 'При замовленні від 5 000 ₴', icon: <><path d="M2 6h11v11H2zM13 10h5l4 4v3h-9z"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M4 3h8M1 9h8"/></> },
  { title: 'Гарантія якості', detail: 'Золото 585 проби', icon: <><path d="M12 2 20 6v6c0 5-3 8-8 10-5-2-8-5-8-10V6z"/><path d="m8 12 3 3 5-6"/></> },
  { title: 'Сертифікат', detail: 'На кожний виріб', icon: <><rect x="3" y="4" width="18" height="14" rx="1"/><path d="M7 8h10M7 12h7M15 17l2 5 2-2 3 1-2-5"/></> },
  { title: 'Повернення', detail: '14 днів', icon: <><path d="M6 3h12v18l-6-4-6 4z"/><path d="m9 10 2 2 4-4"/></> },
]
export default function Benefits(){return <section id="delivery" className="vg-benefits" aria-label="Доставка та гарантії якості"><div className="vg-benefits-inner"><div className="vg-benefits-list">{benefits.map(item=><div className="vg-benefit" key={item.title}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.icon}</svg><div><strong>{item.title}</strong><span>{item.detail}</span></div></div>)}</div></div></section>}
