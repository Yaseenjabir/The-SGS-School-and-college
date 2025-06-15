
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-red-400 to-red-500 p-2 rounded-xl shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-nunito">SGS</h3>
            </div>
            <p className="text-red-100 text-sm leading-relaxed">
              Nurturing young minds and building bright futures since 1985. We provide quality education from Nursery to 12th grade.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-red-200 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-red-200 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-red-200 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-red-200 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-nunito">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Academic Programs', path: '/academic' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Facilities', path: '/facilities' },
                { name: 'Activities', path: '/activities' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-red-100 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-nunito">Resources</h4>
            <div className="space-y-2">
              {[
                { name: 'Calendar', path: '/calendar' },
                { name: 'News & Events', path: '/news' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'FAQ', path: '/faq' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-red-100 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-nunito">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-red-100 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-red-100 text-sm">info@sgs.edu</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-400 mt-1" />
                <span className="text-red-100 text-sm">123 Education Street, Learning City, LC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center">
          <p className="text-red-100 text-sm">
            © 2024 SGS. All rights reserved. | 
            <Link to="/careers" className="hover:text-white ml-1">Careers</Link> | 
            <Link to="/alumni" className="hover:text-white ml-1">Alumni</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
