import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'AI Data Analytics',
    description: 'Платформа для анализа данных с использованием искусственного интеллекта',
    tech: ['React', 'TypeScript', 'Python', 'TensorFlow'],
    github: 'https://github.com/yourusername/ai-analytics',
    demo: 'https://ai-analytics-demo.com',
    emoji: '🤖'
  },
  {
    title: 'Smart Dashboard',
    description: 'Интерактивная панель управления с визуализацией данных в реальном времени',
    tech: ['Next.js', 'GraphQL', 'D3.js'],
    github: 'https://github.com/yourusername/smart-dashboard',
    demo: 'https://smart-dashboard-demo.com',
    emoji: '📊'
  },
  {
    title: 'Cloud Platform',
    description: 'Облачная платформа для развертывания и управления микросервисами',
    tech: ['Node.js', 'Docker', 'Kubernetes'],
    github: 'https://github.com/yourusername/cloud-platform',
    demo: 'https://cloud-platform-demo.com',
    emoji: '☁️'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center glowing-text">
          Проекты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}