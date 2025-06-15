
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, Heart, Award, Clock, MapPin } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Mathematics Teacher",
      department: "Academic",
      level: "Middle & High School",
      type: "Full-time",
      experience: "3+ years",
      deadline: "March 30, 2024"
    },
    {
      title: "Science Laboratory Assistant",
      department: "Science",
      level: "All Grades",
      type: "Full-time",
      experience: "2+ years",
      deadline: "April 15, 2024"
    },
    {
      title: "Art Teacher",
      department: "Creative Arts",
      level: "Elementary",
      type: "Part-time",
      experience: "2+ years",
      deadline: "April 5, 2024"
    },
    {
      title: "Sports Coach",
      department: "Physical Education",
      level: "All Grades",
      type: "Full-time",
      experience: "3+ years",
      deadline: "March 25, 2024"
    }
  ];

  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of our mission to nurture young minds and shape the future. 
            We're always looking for passionate educators and support staff.
          </p>
        </div>

        {/* Why Join Us */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Collaborative Environment", description: "Work with dedicated professionals" },
              { icon: GraduationCap, title: "Professional Growth", description: "Continuous learning opportunities" },
              { icon: Heart, title: "Make a Difference", description: "Impact young lives every day" },
              { icon: Award, title: "Competitive Benefits", description: "Excellent compensation package" }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg text-center animate-slide-up">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{position.title}</h3>
                      <Badge variant="outline">{position.department}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-gray-600">{position.level}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{position.type}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Experience: {position.experience}</p>
                      <p className="text-sm text-gray-600">Deadline: {position.deadline}</p>
                    </div>
                    <div className="text-right">
                      <Button className="bg-gradient-to-r from-red-500 to-red-600">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact for Applications */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 border-0 shadow-xl text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
              <p className="text-xl mb-8 text-red-100">
                Send your resume and cover letter to hr@sgs.edu
              </p>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Email Application
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Careers;
