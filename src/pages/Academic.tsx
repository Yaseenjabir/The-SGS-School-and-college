
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Clock,
  GraduationCap,
  Star,
  Calendar,
  Award
} from 'lucide-react';

const Academic = () => {
  const programs = [
    {
      title: "Early Childhood (Nursery - KG)",
      ageGroup: "3-5 years",
      description: "Foundation building through play-based learning, sensory activities, and basic skill development.",
      subjects: ["English Language", "Mathematics Basics", "Science Exploration", "Art & Craft", "Music & Movement", "Social Skills"],
      highlights: ["Play-based learning", "Sensory development", "Social interaction", "Creative expression"],
      color: "from-red-400 to-red-500"
    },
    {
      title: "Primary School (Grades 1-5)",
      ageGroup: "6-10 years",
      description: "Core academic foundation with emphasis on literacy, numeracy, and exploratory learning.",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi/Second Language", "Physical Education", "Arts", "Computer Basics"],
      highlights: ["Strong academic foundation", "Interactive learning", "Skill building", "Character development"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Middle School (Grades 6-8)",
      ageGroup: "11-13 years",
      description: "Comprehensive curriculum preparing students for advanced learning with subject specialization.",
      subjects: ["English Literature", "Advanced Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography", "Computer Science", "Foreign Language"],
      highlights: ["Subject depth", "Critical thinking", "Project-based learning", "Leadership skills"],
      color: "from-red-600 to-red-700"
    },
    {
      title: "High School (Grades 9-12)",
      ageGroup: "14-18 years",
      description: "College preparatory program with multiple streams and advanced placement options.",
      subjects: ["Advanced English", "Calculus/Statistics", "Advanced Sciences", "Economics", "Psychology", "Fine Arts", "Research Methods", "Career Guidance"],
      highlights: ["College preparation", "Stream selection", "Advanced placement", "Career counseling"],
      color: "from-red-700 to-red-800"
    }
  ];

  const curricularBoards = [
    {
      name: "CBSE (Central Board)",
      description: "Comprehensive curriculum recognized nationwide with focus on conceptual learning",
      grades: "Grades 1-12",
      features: ["National recognition", "Holistic development", "Continuous assessment", "Skill-based learning"]
    },
    {
      name: "Cambridge International",
      description: "Global curriculum preparing students for international opportunities",
      grades: "Grades 6-12",
      features: ["International standards", "Critical thinking", "Global perspective", "University preparation"]
    }
  ];

  const specialPrograms = [
    {
      title: "STEM Excellence Program",
      description: "Advanced Science, Technology, Engineering, and Mathematics program with hands-on projects and research opportunities.",
      icon: BookOpen
    },
    {
      title: "Creative Arts Academy",
      description: "Comprehensive arts program including visual arts, performing arts, music, and creative writing.",
      icon: Star
    },
    {
      title: "Leadership Development",
      description: "Student council, peer mentoring, and leadership workshops to develop future leaders.",
      icon: Users
    },
    {
      title: "Global Studies Program",
      description: "International curriculum, cultural exchange programs, and foreign language immersion.",
      icon: Trophy
    }
  ];

  return (
    <AnimatedPage>
      <div className="min-h-screen font-nunito py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-6">
              Academic Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive education from Nursery to 12th grade, designed to nurture curious minds 
              and prepare students for success in higher education and beyond.
            </p>
          </AnimatedSection>

          {/* Academic Programs */}
          <section className="mb-16">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Academic Programs</h2>
              <p className="text-xl text-gray-600">Age-appropriate curriculum designed for optimal learning</p>
            </AnimatedSection>

            <div className="space-y-8">
              {programs.map((program, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                  <Card className="bg-white border-0 shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-3 gap-0">
                        <div className={`bg-gradient-to-br ${program.color} p-8 text-white`}>
                          <div className="flex items-center mb-4">
                            <GraduationCap className="h-8 w-8 mr-3" />
                            <div>
                              <h3 className="text-2xl font-bold">{program.title}</h3>
                              <p className="text-white/80">{program.ageGroup}</p>
                            </div>
                          </div>
                          <p className="text-white/90 leading-relaxed">{program.description}</p>
                        </div>
                        
                        <div className="p-8 lg:col-span-2">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <BookOpen className="h-5 w-5 mr-2 text-red-600" />
                                Core Subjects
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {program.subjects.map((subject, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs border-red-200 text-red-700">
                                    {subject}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <Star className="h-5 w-5 mr-2 text-red-500" />
                                Program Highlights
                              </h4>
                              <div className="space-y-2">
                                {program.highlights.map((highlight, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-gray-700 text-sm">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* Curriculum Boards */}
          <section className="mb-16">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Curriculum Boards</h2>
              <p className="text-xl text-gray-600">Multiple pathways to academic success</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {curricularBoards.map((board, index) => (
                <AnimatedSection key={index} animation="scale-up" delay={index * 200}>
                  <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-gray-800">{board.name}</CardTitle>
                      <Badge className="w-fit bg-red-600 hover:bg-red-700">{board.grades}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6 leading-relaxed">{board.description}</p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800">Key Features:</h4>
                        {board.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Award className="h-4 w-4 text-red-600" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* Special Programs */}
          <section className="mb-16">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Programs</h2>
              <p className="text-xl text-gray-600">Enhanced learning opportunities for exceptional growth</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {specialPrograms.map((program, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 150}>
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <program.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{program.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* Academic Calendar Highlight */}
          <section className="mb-16">
            <AnimatedSection>
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-xl">
                <CardContent className="p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-6">Academic Year 2024-25</h2>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-6 w-6 text-red-600" />
                          <div>
                            <p className="font-semibold text-gray-800">Session Start: April 2024</p>
                            <p className="text-gray-600">New academic year begins</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-6 w-6 text-red-500" />
                          <div>
                            <p className="font-semibold text-gray-800">School Hours: 8:00 AM - 3:30 PM</p>
                            <p className="text-gray-600">Extended care available until 6:00 PM</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Trophy className="h-6 w-6 text-red-600" />
                          <div>
                            <p className="font-semibold text-gray-800">Assessment: Continuous Evaluation</p>
                            <p className="text-gray-600">Holistic assessment approach</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="h-16 w-16 text-white" />
                      </div>
                      <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3">
                        View Full Calendar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <AnimatedSection animation="scale-up">
              <Card className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 border-0 shadow-xl text-white">
                <CardContent className="p-12">
                  <h2 className="text-4xl font-bold mb-6">Join Our Academic Community</h2>
                  <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto leading-relaxed">
                    Experience education that goes beyond textbooks. Discover, explore, and excel with us!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg">
                      Explore Curriculum
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg">
                      Schedule Campus Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Academic;
