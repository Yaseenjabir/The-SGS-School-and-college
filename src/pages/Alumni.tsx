
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users } from 'lucide-react';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';

const Alumni = () => {
  return (
    <AnimatedPage className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-6">
            Alumni Network
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our graduates continue to make us proud with their achievements across various fields worldwide.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, number: "5,000+", label: "Alumni Worldwide" },
            { icon: Award, number: "95%", label: "University Acceptance" },
            { icon: GraduationCap, number: "50+", label: "Countries" }
          ].map((stat, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <Card className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 border-0 shadow-xl text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
              <p className="text-xl mb-8 text-red-100">
                Join our alumni network and stay connected with your classmates and school community.
              </p>
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                Register as Alumni
              </button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </AnimatedPage>
  );
};

export default Alumni;
