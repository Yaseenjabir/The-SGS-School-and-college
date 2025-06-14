
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Star } from 'lucide-react';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';

const Awards = () => {
  const awards = [
    {
      title: "Best School Award 2023",
      category: "Academic Excellence",
      year: "2023",
      description: "Recognized for outstanding academic performance and innovative teaching methods."
    },
    {
      title: "Innovation in Education 2022",
      category: "Technology Integration",
      year: "2022",
      description: "Awarded for pioneering digital learning initiatives and smart classroom implementation."
    },
    {
      title: "Community Service Excellence",
      category: "Social Impact",
      year: "2023",
      description: "Honored for significant community outreach and social responsibility programs."
    }
  ];

  return (
    <AnimatedPage className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-6">
            Awards & Recognition
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has been recognized by various educational authorities and organizations.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{award.title}</h3>
                  <Badge className="mb-4 bg-red-500 hover:bg-red-600">{award.year}</Badge>
                  <Badge variant="outline" className="mb-4 ml-2 border-red-500 text-red-600">{award.category}</Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Awards;
