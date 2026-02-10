import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t-4 border-[#C19A6B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

          {/* Project Identity */}
          <div className="lg:col-span-5 pr-8">
            <h3 className="font-serif text-3xl font-bold mb-8 text-white">
              Tharma AI
            </h3>
            <div className="text-gray-300 text-base leading-relaxed space-y-6 font-sans text-justify max-w-lg">
              <p>
                Trustworthy, Accountable, Responsible Machine AI is a two-year longitudinal study examining the ethics of AI in e-governance across diverse Indian regions to ensure fairness, transparency, and accountability in public service delivery.
              </p>
              <p>
                This ICSSR-funded research bridges computer science and social science methodologies to develop practical frameworks, audit tools, and policy recommendations that advance inclusive and citizen-centric AI governance aligned with India's Viksit Bharat@2047 vision.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="font-serif text-2xl font-bold mb-8 text-[#C19A6B]">Navigation</h4>
            <ul className="space-y-4 text-base text-gray-300 font-sans">
              <li><NavLink to="/project" className="hover:text-white transition-colors">The Project</NavLink></li>
              <li><NavLink to="/research" className="hover:text-white transition-colors">Research & Impact</NavLink></li>
              <li><NavLink to="/events" className="hover:text-white transition-colors">Events</NavLink></li>
              <li><NavLink to="/people" className="hover:text-white transition-colors">People</NavLink></li>
              <li><NavLink to="/opportunities" className="hover:text-white transition-colors">Opportunities</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-white transition-colors">Gallery</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-2xl font-bold mb-8 text-[#C19A6B]">Contact</h4>
            <ul className="space-y-6 text-base text-gray-300 font-sans">
              <li className="flex items-start gap-4">
                <MapPin size={24} className="text-[#C19A6B] shrink-0 mt-1" />
                <span className="leading-relaxed whitespace-nowrap">
                  SRM Institute of Science & Technology,<br />
                  Kattankulathur, Chennai,<br />
                  Tamil Nadu - 603203
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={24} className="text-[#C19A6B] shrink-0" />
                <a href="mailto:icssr2026srmist@gmail.com" className="hover:text-white transition-colors">icssr2026srmist@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#C19A6B] pt-8 mt-8">
          <p className="text-sm text-gray-400 font-sans text-center">
            © 2026 ICSSR SRMIST, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};