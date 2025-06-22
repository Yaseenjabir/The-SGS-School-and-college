import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

import {
  emailAddress,
  location,
  phoneNumber,
  schoolName,
  since,
} from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#700000] via-[#800000] to-[#700000] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="border border-white p-2 rounded-xl shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-nunito">{schoolName}</h3>
            </div>
            <p className="text-red-100 text-sm leading-relaxed">
              Nurturing young minds and building bright futures since {since}.
              We provide quality education from Playgroup to FSc.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/TheSGS" target="_blank">
                <Facebook className="h-5 w-5 text-red-200 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://www.tiktok.com/@sgscollege" target="_blank">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-nunito">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Academic Programs", path: "/academic" },
                { name: "Admissions", path: "/admissions" },
                { name: "Facilities", path: "/facilities" },
                { name: "Activities", path: "/activities" },
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
                { name: "Calendar", path: "/calendar" },
                { name: "Gallery", path: "/gallery" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "FAQ", path: "/faq" },
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
                <span className="text-red-100 text-sm">{phoneNumber}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-red-100 text-sm">{emailAddress}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-400 mt-1" />
                <span className="text-red-100 text-sm">{location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center">
          <p className="text-red-100 text-sm">
            © 2025 {schoolName}. All rights reserved. |
            <Link to="/careers" className="hover:text-white ml-1">
              Careers
            </Link>{" "}
            |
            <Link to="/alumni" className="hover:text-white ml-1">
              Alumni
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
