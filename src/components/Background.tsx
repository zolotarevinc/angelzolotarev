import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),rgba(0,0,0,0.4))]" />
      
      {/* Анимированные круги */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      
      {/* Сетка */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(168,85,247,0.15) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }} />
      
      {/* Звезды */}
      <div className="stars" />
    </div>
  );
}