
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Parent of Emma (Grade 7)",
      content: "Bright Future School has exceeded all our expectations. The teachers are incredibly dedicated, and Emma has grown so much academically and personally.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Parent of Alex (Grade 10)",
      content: "The school's focus on both academics and character development is remarkable. Alex has become more confident and responsible since joining.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Alumni Parent",
      content: "Both my children graduated from here and are now successful in their careers. The foundation they received at Bright Future School was invaluable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            What Our Community Says
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from parents, students, and alumni about their experiences at Bright Future School.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-500 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6">{testimonial.content}</p>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
