
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { User, Mail, Phone, FileText, Briefcase, MessageSquare } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number'),
  position: z.string().min(1, 'Position is required'),
  experience: z.string().min(1, 'Please select your experience level'),
  qualifications: z.string().min(2, 'Please enter your qualifications'),
  coverLetter: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface CareerApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position?: string;
}

const CareerApplicationForm: React.FC<CareerApplicationFormProps> = ({ open, onOpenChange, position = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      position: position,
      experience: '',
      qualifications: '',
      coverLetter: '',
    },
  });

  const experienceLevels = [
    'Fresh Graduate',
    '1-2 years',
    '3-5 years',
    '5-10 years',
    '10+ years'
  ];

  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
  };

  const formatWhatsAppMessage = (data: FormData): string => {
    const message = `💼 *JOB APPLICATION*

📋 *Position Applied For:*
${sanitizeInput(data.position)}

👤 *Applicant Information:*
• Full Name: ${sanitizeInput(data.fullName)}
• Email: ${sanitizeInput(data.email)}
• Phone: ${sanitizeInput(data.phone)}

💼 *Professional Details:*
• Experience Level: ${sanitizeInput(data.experience)}
• Qualifications: ${sanitizeInput(data.qualifications)}

📝 *Cover Letter:*
${data.coverLetter ? sanitizeInput(data.coverLetter) : 'Not provided'}

---
Thank you for your interest in joining SGS! We will review your application and get back to you soon. 🌟`;

    return encodeURIComponent(message);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const whatsappMessage = formatWhatsAppMessage(data);
      const whatsappUrl = `https://wa.me/923079302311?text=${whatsappMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Close the form
      onOpenChange(false);
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    if (position && position !== form.getValues('position')) {
      form.setValue('position', position);
    }
  }, [position, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            Job Application Form
          </DialogTitle>
          <DialogDescription>
            Please fill out the form below to apply for this position. We'll redirect you to WhatsApp to complete your application.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <User className="mr-2 h-5 w-5 text-red-500" />
                Personal Information
              </h3>
              
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+92 300 1234567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-red-500" />
                Professional Information
              </h3>
              
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position Applied For *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter position title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Level *</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select Experience Level</option>
                        {experienceLevels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qualifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qualifications *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter your educational qualifications and relevant certifications..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us why you're interested in this position and why you'd be a good fit..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CareerApplicationForm;
