import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, GraduationCap, Phone, Mail } from "lucide-react";
import AdmissionForm from "@/components/AdmissionForm";
import {
  emailAddress,
  phoneNumber,
  schoolMoto,
  schoolName,
  since,
} from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmissionFormOpen, setIsAdmissionFormOpen] = useState(false);
  const location = useLocation();

  // Simplified navigation with only important pages
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academic", path: "/academic" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-red-100 shadow-lg">
        {/* Top Bar */}
        <div className=" bg-[#800000] text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <span>{phoneNumber}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-3 w-3" />
                  <span>{emailAddress}</span>
                </div>
              </div>
              <div className="hidden md:block">
                <span>📚 Excellence in Education Since {since}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              {/* <div className="relative">
                <div className="bg-[#800000] p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 bg-yellow-400 w-4 h-4 rounded-full flex items-center justify-center">
                  <span className="text-xs">✨</span>
                </div>
              </div> */}
              <img src="/sgs-logo.png" className="w-14 h-14" alt="" />
              <div className="sm:block">
                <h1 className="text-3xl font-bold font-nunito bg-[#800000] bg-clip-text text-transparent">
                  {schoolName}
                </h1>
                <p className="text-[11.8px] text-gray-600 font-medium">
                  {schoolMoto}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 px-2 font-nunito font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? "border-b border-b-[#800000] transform scale-105 rounded-b"
                      : "text-gray-700 border-b hover:border-b-[#800000] hover:scale-105"
                  }`}
                >
                  {item.name}
                  {/* {isActive(item.path) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  )} */}
                </Link>
              ))}
            </nav>

            {/* Apply Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <Button
                  className="bg-[#900000f1] hover:bg-transparent border border-transparent hover:text-[#800000] hover:border-[#800000] text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                  onClick={() => setIsAdmissionFormOpen(true)}
                >
                  Apply Now
                </Button>
              </div>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden border-red-200 hover:bg-red-50 hover:border-red-300 rounded-xl"
                  >
                    <Menu className="h-6 w-6 text-red-600" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[320px] bg-white p-0 border-l-2 border-red-100"
                >
                  <ScrollArea className="h-full">
                    <div className="flex flex-col p-6">
                      {/* Mobile Header */}
                      <div className="pb-6 border-b border-red-100">
                        <div className="flex items-center space-x-3">
                          <div className="bg-[#800000] p-2 rounded-xl shadow-lg">
                            <GraduationCap className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h2 className="font-bold font-nunito bg-[#800000] bg-clip-text text-transparent">
                              {schoolName}
                            </h2>
                            <p className="text-xs text-gray-600 font-medium">
                              Excellence Since {since}
                            </p>
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
                                ? "bg-[#800000] text-white shadow-lg"
                                : "text-gray-700 hover:bg-red-50 hover:text-red-600"
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
                        <Button
                          className="bg-[#900000f1] hover:bg-transparent w-full border border-transparent hover:text-[#800000] hover:border-[#800000] text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                          onClick={() => {
                            setIsOpen(false);
                            setIsAdmissionFormOpen(true);
                          }}
                        >
                          Apply Now
                        </Button>
                      </div>

                      {/* Contact Info */}
                      <div className="mt-6 pt-4 border-t border-red-100 space-y-3">
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                          <Phone className="h-4 w-4 text-red-500" />
                          <span>{phoneNumber}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                          <Mail className="h-4 w-4 text-red-500" />
                          <span>{emailAddress}</span>
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

      {/* Admission Form Modal */}
      <AdmissionForm
        open={isAdmissionFormOpen}
        onOpenChange={setIsAdmissionFormOpen}
      />
    </>
  );
};

export default Header;
