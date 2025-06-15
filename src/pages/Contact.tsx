import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Users
} from 'lucide-react';
import MapSection from '@/components/MapSection';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Sanitize input data
    const sanitizedData = {
      name: formData.name.trim().replace(/[<>]/g, ''),
      email: formData.email.trim().replace(/[<>]/g, ''),
      phone: formData.phone.trim().replace(/[<>]/g, ''),
      subject: formData.subject.trim().replace(/[<>]/g, ''),
      message: formData.message.trim().replace(/[<>]/g, '')
    };

    // Format WhatsApp message
    const whatsappMessage = `*Contact Form Inquiry*%0A%0A` +
      `*Name:* ${encodeURIComponent(sanitizedData.name)}%0A` +
      `*Email:* ${encodeURIComponent(sanitizedData.email)}%0A` +
      `*Phone:* ${encodeURIComponent(sanitizedData.phone || 'Not provided')}%0A` +
      `*Subject:* ${encodeURIComponent(sanitizedData.subject || 'General Inquiry')}%0A` +
      `*Message:* ${encodeURIComponent(sanitizedData.message)}`;

    // WhatsApp number
    const whatsappNumber = '923079302311';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Show success toast
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be redirected to WhatsApp to send your inquiry.",
    });

    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const schoolAddress = "WCRJ+WW7, Sambat Cham, Pakistan";

  return (
    <AnimatedPage className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Get in touch with any questions about admissions, 
            academics, or general inquiries. Our team is here to help.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                        <p className="text-gray-600">Main Office: +92 307 930 2311</p>
                        <p className="text-gray-600">Admissions: +92 307 930 2311</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-red-600 to-red-700 w-12 h-12 rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                        <p className="text-gray-600">info@sgs.edu.pk</p>
                        <p className="text-gray-600">admissions@sgs.edu.pk</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-red-700 to-red-800 w-12 h-12 rounded-xl flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                        <p className="text-gray-600">
                          WCRJ+WW7, Sambat Cham<br />
                          Pakistan
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-red-800 to-red-900 w-12 h-12 rounded-xl flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            {/* Quick Contact Options */}
            <AnimatedSection className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Visit
                </Button>
                <Button variant="outline" className="w-full border-red-500 text-red-600 hover:bg-red-50">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Live Chat Support
                </Button>
                <Button variant="outline" className="w-full border-red-500 text-red-600 hover:bg-red-50">
                  <Users className="mr-2 h-4 w-4" />
                  Admission Consultation
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-red-500"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-red-500"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-red-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-700 font-medium">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-red-500"
                          placeholder="What is this regarding?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-red-500 min-h-[120px]"
                        placeholder="Please share your message, questions, or comments..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 text-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Map Section */}
        <MapSection address={schoolAddress} />
      </div>
    </AnimatedPage>
  );
};

export default Contact;
