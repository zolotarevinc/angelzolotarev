import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  emoji: string;
}

export function ProjectCard({ title, description, tech, github, demo, emoji }: ProjectCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-purple-900/20 to-black rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300" />
      
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{emoji}</span>
        <h3 className="text-2xl font-bold text-purple-200">{title}</h3>
      </div>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-sm">
            {t}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {github && (
          <a href={github} className="project-link">
            <Github className="w-5 h-5" />
            Код
          </a>
        )}
        {demo && (
          <a href={demo} className="project-link">
            <ExternalLink className="w-5 h-5" />
            Демо
          </a>
        )}
      </div>
      
      <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Sparkles className="w-5 h-5 text-purple-400" />
      </div>
    </div>
  );
}