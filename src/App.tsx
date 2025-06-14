
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import Careers from "./pages/Careers";
import Academic from "./pages/Academic";
import Facilities from "./pages/Facilities";
import Activities from "./pages/Activities";
import Calendar from "./pages/Calendar";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import Principal from "./pages/Principal";
import Alumni from "./pages/Alumni";
import Awards from "./pages/Awards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/academic" element={<Academic />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/news" element={<News />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
