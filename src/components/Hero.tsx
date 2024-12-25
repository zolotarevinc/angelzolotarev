import React from 'react';
import { Sparkles, Code2, Rocket } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <Sparkles className="w-8 h-8 text-purple-400" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-slow delay-500">
        <Code2 className="w-8 h-8 text-pink-400" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float-slow delay-1000">
        <Rocket className="w-8 h-8 text-purple-400" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-6 text-6xl">👨‍💻</div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 glowing-text">
          Angel Zolotarev
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Создаю современные веб-приложения с использованием передовых технологий
        </p>
        <div className="flex justify-center gap-6">
          <a href="#projects" className="glow-button">
            Мои проекты
          </a>
          <a href="#contact" className="glow-button-secondary">
            Связаться
          </a>
        </div>
      </div>
    </div>
  );
}