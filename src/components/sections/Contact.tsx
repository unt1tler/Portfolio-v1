import React, { useState } from 'react';
import { sendDiscordWebhook } from '../../utils/discord';
import { motion } from 'framer-motion';
import { SocialButton } from '../SocialButton';
import { siteConfig } from '../../config/site';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const success = await sendDiscordWebhook(formData);
    setStatus(success ? 'success' : 'error');

    if (success) {
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Get in Touch
            </h2>
            <p className="text-lg mb-8 text-text/80">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            
            <div className="space-y-4 mb-8">
              <SocialButton
                name="GitHub"
                icon={siteConfig.social.github.icon}
                url={`https://github.com/${siteConfig.social.github.username}`}
                color={siteConfig.social.github.color}
              />
              <SocialButton
                name="Discord"
                icon={siteConfig.social.discord.icon}
                url={siteConfig.social.discord.serverUrl}
                color={siteConfig.social.discord.color}
              />
              <SocialButton
                name="Email"
                icon={siteConfig.social.email.icon}
                url={`mailto:${siteConfig.social.email.address}`}
                color={siteConfig.social.email.color}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-3 px-6 rounded-lg bg-primary text-white font-semibold transition-all
                ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}