// components/CategoryCarousel.tsx
'use client';

import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export type Category = {
  id: number;
  title: string;
  text: string;
  className?: string;
  largeTitle?: boolean;
};

const categories: Category[] = [
  { id: 1, title: 'For students', text: '1.037 property', className: 'bg-primary text-white' },
  { id: 2, title: 'Station Near-by', text: '1.037 property', className: 'bg-secondary text-white' },
  { id: 3, title: 'New apartments', text: '1.037 property', className: 'bg-success text-white', largeTitle: true },
  { id: 4, title: 'No key-money', text: '1.037 property', className: 'bg-warning text-white' },
  { id: 5, title: 'Luxury home', text: '1.037 property', className: 'bg-danger text-white' },
  { id: 6, title: 'Pet-friendly', text: '1.037 property', className: 'bg-info text-white' },
];

export default function CategoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
  };

  const scrollNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h2">Home by Categories</h2>
        <div className="d-none d-md-flex gap-2">
          <button className="btn btn-primary" onClick={scrollPrev}>
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </button>
          <button className="btn btn-primary" onClick={scrollNext}>
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="d-flex overflow-auto scroll-smooth gap-3"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`flex-shrink-0 card text-white ${cat.className}`}
            style={{ minWidth: '220px', height: '180px', scrollSnapAlign: 'start' }}
          >
            <div className="card-body d-flex flex-column justify-content-end">
              <h5 className={cat.largeTitle ? 'card-title h5' : 'card-title h6'}>{cat.title}</h5>
              <p className="card-text">{cat.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile controls */}
      <div className="d-flex d-md-none justify-content-center gap-2 mt-3">
        <button className="btn btn-primary" onClick={scrollPrev}>
          <ChevronLeftIcon className="h-5 w-5 text-white" />
        </button>
        <button className="btn btn-primary" onClick={scrollNext}>
          <ChevronRightIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}
