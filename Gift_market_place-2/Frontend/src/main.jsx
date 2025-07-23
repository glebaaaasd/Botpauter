import React, { useEffect, useState } from 'react'

export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div style={{ maxWidth: 600, margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Маркетплейс подарков</h1>
      {products.length === 0 ? (
        <p>Загрузка...</p>
      ) : (
        <ul>
          {products.map(p => (
            <li key={p.id}>{p.name} -- {p.price} ₽</li>
          ))}
        </ul>
      )}
    </div>
  )
}