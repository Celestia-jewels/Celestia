
import React from "react";

const products = [
  {
    id: 1,
    name: "Bracelet Diamants Éternels",
    image: "/images/bracelet-diamants.jpg",
    price: "120€",
    description: "Élégance éternelle, éclat céleste. Bracelet serti de pierres brillantes."
  },
  {
    id: 2,
    name: "Bracelet Doré Chic",
    image: "/images/bracelet-dore.jpg",
    price: "95€",
    description: "Un bracelet doré raffiné, orné de détails lumineux pour un look chic."
  }
];

export default function Page() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 40, color: '#7e22ce' }}>Celestia Jewels</h1>
        <p style={{ color: '#6b7280' }}>Bijoux inspirés du ciel et des étoiles</p>
      </header>

      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <input placeholder="Rechercher un bijou..." style={{ padding: 10, width: '100%', marginBottom: 30 }} />
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {products.map(product => (
            <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 10px #eee' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <div style={{ padding: 15 }}>
                <h2 style={{ color: '#7e22ce', fontSize: 18 }}>{product.name}</h2>
                <p style={{ color: '#6b7280', fontSize: 14 }}>{product.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                  <span style={{ color: '#7e22ce', fontWeight: 'bold' }}>{product.price}</span>
                  <button style={{ background: '#7e22ce', color: 'white', padding: '5px 10px', borderRadius: 5 }}>Voir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ marginTop: 50, textAlign: 'center', color: '#6b7280' }}>
        <p>Suivez-nous sur Instagram :</p>
        <a href="https://instagram.com/celestia_jewels" target="_blank" style={{ color: '#7e22ce' }}>@celestia_jewels</a>
        <p style={{ marginTop: 10 }}>
          Contactez-nous : <a href="mailto:contact@celestiajewels.com" style={{ textDecoration: 'underline' }}>contact@celestiajewels.com</a>
        </p>
      </footer>
    </div>
  );
}
