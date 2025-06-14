
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users } from 'lucide-react';

const Alumni = () => {
  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Alumni Network
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our graduates continue to make us proud with their achievements across various fields worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, number: "5,000+", label: "Alumni Worldwide" },
            { icon: Award, number: "95%", label: "University Acceptance" },
            { icon: GraduationCap, number: "50+", label: "Countries" }
          ].map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg text-center animate-scale-up">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-0 shadow-xl text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our alumni network and stay connected with your classmates and school community.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
              Register as Alumni
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Alumni;
