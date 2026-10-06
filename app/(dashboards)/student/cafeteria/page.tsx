'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Cafeteria.module.css';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  calories: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { id: '1', name: 'Artisan Teriyaki Chicken Bowl', price: 8.50, category: 'Bowls', calories: '580 kcal', icon: '🍗' },
  { id: '2', name: 'Mediterranean Vegan Falafel Wrap', price: 7.25, category: 'Bowls', calories: '420 kcal', icon: '🥙' },
  { id: '3', name: 'Grass-Fed Smash Burger & Wedges', price: 9.00, category: 'Bowls', calories: '720 kcal', icon: '🍔' },
  { id: '4', name: 'Cold Brew Oat Milk Macchiato', price: 4.25, category: 'Drinks', calories: '110 kcal', icon: '☕' },
  { id: '5', name: 'Supergreen Matcha Protein Smoothie', price: 5.50, category: 'Drinks', calories: '210 kcal', icon: '🥤' },
  { id: '6', name: 'Warm Chocolate Chip Cookie', price: 2.50, category: 'Snacks', calories: '190 kcal', icon: '🍪' },
];

export default function CafeteriaPreorderPage() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (copy[id] > 1) {
        copy[id] -= 1;
      } else {
        delete copy[id];
      }
      return copy;
    });
  };

  const total = Object.entries(cart).reduce((acc, [id, qty]) => {
    const item = menuItems.find((m) => m.id === id);
    return acc + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div className={styles.container}>
      <Link href="/student" className={styles.backLink}>
        ← Back to Student Hub
      </Link>

      <div className={styles.headerRow}>
        <div className={styles.titleArea}>
          <h1>🍔 Cafeteria Pre-order & Express Pickup</h1>
          <p className={styles.subtitle}>Skip the queues at Dining Commons 1 & 2. Pay via Campus Wallet.</p>
        </div>
      </div>

      <div className={styles.cafeteriaLayout}>
        <div className={styles.menuGrid}>
          {menuItems.map((item) => (
            <div key={item.id} className={`${styles.foodCard} glass`}>
              <div className={styles.foodIcon}>{item.icon}</div>
              <div>
                <h3 className={styles.foodName}>{item.name}</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{item.calories}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={styles.foodPrice}>${item.price.toFixed(2)}</span>
                <button onClick={() => addToCart(item.id)} className={styles.addBtn}>+ Add</button>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.cartCard} glass`}>
          <div style={{ fontWeight: 800, fontSize: '18px' }}>Your Express Order</div>
          <div style={{ fontSize: '12px', color: 'var(--accent-secondary)' }}>
            ⚡ Live Queue: 4 orders ahead (~10 min prep time)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minHeight: '100px' }}>
            {Object.keys(cart).length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Your cart is empty. Select items to order.</p>
            ) : (
              Object.entries(cart).map(([id, qty]) => {
                const item = menuItems.find((m) => m.id === id);
                if (!item) return null;
                return (
                  <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                    <span>{item.name} x{qty}</span>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span>${(item.price * qty).toFixed(2)}</span>
                      <button onClick={() => removeFromCart(id)} style={{ color: '#FF6B6B', fontSize: '14px' }}>✕</button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '16px' }}>
            <span>Total:</span>
            <span style={{ color: 'var(--accent-secondary)' }}>${total.toFixed(2)}</span>
          </div>

          {orderPlaced ? (
            <div style={{ background: 'rgba(0,255,133,0.15)', color: 'var(--accent-secondary)', padding: '12px', borderRadius: '8px', textAlign: 'center', fontSize: '13px', fontWeight: 700 }}>
              ✓ Order #8192 Sent to Kitchen! Pick up at Counter 2.
            </div>
          ) : (
            <button
              disabled={Object.keys(cart).length === 0}
              onClick={() => setOrderPlaced(true)}
              className={styles.checkoutBtn}
              style={{ opacity: Object.keys(cart).length === 0 ? 0.5 : 1 }}
            >
              Order & Pay via Wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
