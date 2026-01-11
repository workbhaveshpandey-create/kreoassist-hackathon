import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Mail, Heart, ExternalLink, Download } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Download', href: 'https://github.com/workbhaveshpandey-create/kreoassist/releases/download/v1.0.0/app-release.apk' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'First Aid Guide', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
    community: [
      { label: 'Instagram', href: 'https://instagram.com/kreo.dev' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/kreodev/' },
      { label: 'GitHub', href: 'https://github.com/workbhaveshpandey-create/kreoassist' },
    ],
  };

  const socialLinks = [
    { icon: <Instagram size={18} />, href: 'https://instagram.com/kreo.dev', label: 'Instagram' },
    { icon: <Github size={18} />, href: 'https://github.com/workbhaveshpandey-create/kreoassist', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/kreodev/', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:kreodevops@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#030303]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo />
              <div>
                <span className="font-bold text-xl tracking-tight text-white">
                  Kreo<span className="text-saffron">Assist</span>
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              Empowering communities with resilient technology. When the grid fails, KreoAssist keeps you connected.
            </p>

            {/* Download CTA */}
            <a
              href="https://github.com/workbhaveshpandey-create/kreoassist/releases/download/v1.0.0/app-release.apk"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-saffron to-indiaGreen text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Download APK
            </a>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-saffron transition-colors text-sm flex items-center gap-1"
                  >
                    {link.label}
                    {link.href.startsWith('http') && <ExternalLink size={12} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-saffron transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-saffron transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>© {new Date().getFullYear()} KreoAssist</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Made with <Heart size={12} className="text-red-500" /> in India 🇮🇳
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-white/5 text-gray-500 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;