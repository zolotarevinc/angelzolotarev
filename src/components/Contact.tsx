import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center glowing-text">
          Связаться со мной
        </h2>
        <div className="flex justify-center gap-6">
          <a href="https://t.me/yourusername" className="contact-button">
            <MessageCircle className="w-6 h-6" />
            Telegram
          </a>
          <a href="mailto:your@email.com" className="contact-button">
            <Mail className="w-6 h-6" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}