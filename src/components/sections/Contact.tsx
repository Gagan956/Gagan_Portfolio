'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, X } from 'lucide-react';
import { SocialLink } from '@/types';

const socialLinks: SocialLink[] = [
  { id: 'github', name: 'GitHub', url: 'https://github.com/Gagan956', icon: Github },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/gagan9560', icon: Linkedin },
  { id: 'x', name: 'x', url: 'https://x.com', icon: X },
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/its_gagan81?igsh=emp5MXc0bmdzM3hz', icon: Instagram },
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'gagansharma9560@gmail.com',
    href: 'mailto:gagansharma9560@gmail.com', 
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '9354371766',
    href: 'tel:9354371766',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Faridabad ,HR',
    href: '#',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's work together"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-6">
              Let&#39;s Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I&#39;m always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="flex items-center space-x-4 p-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                    <info.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      {info.title}
                    </h4>
                    <a
                      href={info.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Follow Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent size={24} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  type="submit"
                  className="w-full"
                >
                  <Button
                    size="lg"
                    className="w-full"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
