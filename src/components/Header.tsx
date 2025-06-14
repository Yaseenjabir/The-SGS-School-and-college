
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Menu, GraduationCap, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Simplified navigation with only important pages
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academic', path: '/academic' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-red-100 shadow-lg">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>info@brightfuture.edu</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>📚 Excellence in Education Since 1985</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 bg-yellow-400 w-4 h-4 rounded-full flex items-center justify-center">
                <span className="text-xs">✨</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-3xl font-bold font-nunito bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Bright Future School
              </h1>
              <p className="text-sm text-gray-600 font-medium">Nurturing Excellence Since 1985</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-3 rounded-xl font-nunito font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-red-50 hover:text-red-600 hover:scale-105'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Apply Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/admissions" className="hidden md:block">
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
                Apply Now
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden border-red-200 hover:bg-red-50 hover:border-red-300 rounded-xl">
                  <Menu className="h-6 w-6 text-red-600" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] bg-white p-0 border-l-2 border-red-100">
                <ScrollArea className="h-full">
                  <div className="flex flex-col p-6">
                    {/* Mobile Header */}
                    <div className="pb-6 border-b border-red-100">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-xl shadow-lg">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold font-nunito bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                            Bright Future School
                          </h2>
                          <p className="text-xs text-gray-600 font-medium">Excellence Since 1985</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="space-y-2 py-6">
                      {navItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center px-4 py-3 rounded-xl font-nunito font-semibold transition-all duration-300 ${
                            isActive(item.path)
                              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                              : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                          }`}
                        >
                          {item.name}
                          {isActive(item.path) && (
                            <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full"></div>
                          )}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Apply Button */}
                    <div className="pt-4 mt-4 border-t border-red-100">
                      <Link to="/admissions" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl shadow-lg font-semibold">
                          Apply Now
                        </Button>
                      </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 pt-4 border-t border-red-100 space-y-3">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Phone className="h-4 w-4 text-red-500" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Mail className="h-4 w-4 text-red-500" />
                        <span>info@brightfuture.edu</span>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
