import React from 'react';
import { Github } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AZ
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#projects" className="nav-link">Проекты</a>
            <a href="#about" className="nav-link">Обо мне</a>
            <a href="#contact" className="nav-link">Контакты</a>
            <a href="https://github.com/yourusername" 
               className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}