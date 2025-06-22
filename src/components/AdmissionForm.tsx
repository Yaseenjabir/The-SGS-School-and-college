import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { redirectToWhatsapp } from "@/lib/utils";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name must be at least 2 characters"),
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  grade: z.string().min(1, "Please select a grade"),
  previousSchool: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface AdmissionFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdmissionForm: React.FC<AdmissionFormProps> = ({
  open,
  onOpenChange,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      grade: "",
      previousSchool: "",
      additionalInfo: "",
    },
  });

  const grades = [
    "Nursery",
    "KG",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ];

  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, "");
  };

  const formatWhatsAppMessage = (data: FormData): string => {
    const message = `*ADMISSION APPLICATION*

 *Student Information:*
• Student Name: ${sanitizeInput(data.studentName)}
• Grade Applying For: ${sanitizeInput(data.grade)}

*Parent/Guardian Information:*
• Parent Name: ${sanitizeInput(data.parentName)}
• Email: ${sanitizeInput(data.email)}
• Phone: ${sanitizeInput(data.phone)}

*Academic Background:*
• Previous School: ${
      data.previousSchool ? sanitizeInput(data.previousSchool) : "Not specified"
    }

*Additional Information:*
${data.additionalInfo ? sanitizeInput(data.additionalInfo) : "None provided"}

---
Thank you for your interest in SGS! We look forward to welcoming your child to our school family.`;

    return encodeURIComponent(message);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const whatsappMessage = formatWhatsAppMessage(data);
      const whatsappUrl = `https://wa.me/${redirectToWhatsapp}?text=${whatsappMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Close the form
      onOpenChange(false);

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            Admission Application Form
          </DialogTitle>
          <DialogDescription>
            Please fill out the form below to apply for admission. We'll
            redirect you to WhatsApp to complete your application.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Student Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <User className="mr-2 h-5 w-5 text-red-500" />
                Student Information
              </h3>

              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter student's full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade Applying For *</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select Grade</option>
                        {grades.map((grade) => (
                          <option key={grade} value={grade}>
                            {grade}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Parent Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <User className="mr-2 h-5 w-5 text-red-500" />
                Parent/Guardian Information
              </h3>

              <FormField
                control={form.control}
                name="parentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent/Guardian Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter parent's full name"
                        {...field}
                      />
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
                        <Input
                          type="email"
                          placeholder="parent@email.com"
                          {...field}
                        />
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

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-red-500" />
                Additional Information
              </h3>

              <FormField
                control={form.control}
                name="previousSchool"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous School (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Name of previous school" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Comments (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any special requirements, medical conditions, or additional information..."
                        className="min-h-[100px]"
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

export default AdmissionForm;
