"use client";

import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed w-4 h-4 bg-purple-500 rounded-full mix-blend-difference pointer-events-none z-50"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="fixed w-16 h-16 bg-purple-500 rounded-full mix-blend-difference pointer-events-none opacity-0 transition-opacity duration-300 z-50"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}