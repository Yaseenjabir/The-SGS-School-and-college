
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Users, 
  Calendar,
  Quote
} from 'lucide-react';

const Principal = () => {
  const achievements = [
    "Ph.D. in Educational Leadership, Harvard University",
    "Master's in Curriculum Development, Stanford University",
    "15+ years in Educational Administration",
    "Published author of 'Modern Teaching Methodologies'",
    "Recipient of National Excellence in Education Award 2022",
    "Speaker at International Education Conferences",
    "Former Principal at prestigious institutions",
    "Advocate for innovative learning approaches"
  ];

  const initiatives = [
    {
      title: "Digital Learning Integration",
      description: "Pioneered the implementation of smart classrooms and interactive learning platforms across all grade levels.",
      year: "2021-2024"
    },
    {
      title: "Student Wellness Program",
      description: "Launched comprehensive mental health and wellness initiatives including counseling services and mindfulness programs.",
      year: "2020-Present"
    },
    {
      title: "Community Outreach Initiative",
      description: "Established partnerships with local organizations to provide real-world learning opportunities for students.",
      year: "2019-Present"
    },
    {
      title: "Teacher Excellence Program",
      description: "Developed professional development framework that has improved teaching quality and student outcomes.",
      year: "2018-Present"
    }
  ];

  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Meet Our Principal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to educational excellence and student success
          </p>
        </div>

        {/* Principal Introduction */}
        <section className="mb-16">
          <Card className="bg-white border-0 shadow-xl overflow-hidden animate-slide-up">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Photo Section */}
                <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-48 h-48 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <GraduationCap className="h-24 w-24 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Dr. Sarah Johnson</h2>
                    <p className="text-xl text-blue-600 font-medium mb-4">Principal</p>
                    <div className="flex justify-center space-x-2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500">Ph.D. Educational Leadership</Badge>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-12">
                  <div className="mb-8">
                    <Quote className="h-8 w-8 text-blue-500 mb-4" />
                    <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                      "Education is not just about imparting knowledge; it's about igniting curiosity, 
                      fostering creativity, and nurturing the whole child. Every student who walks through 
                      our doors has unlimited potential, and it's our privilege to help them discover and 
                      develop their unique gifts."
                    </blockquote>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800">15+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800">25+</p>
                      <p className="text-sm text-gray-600">Awards & Recognition</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Full Message */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Principal's Message</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                  Dear Parents, Students, and Community Members,
                </p>
                <p>
                  It is with great pleasure and excitement that I welcome you to Bright Future School, 
                  where we have been nurturing young minds and building bright futures for over three decades. 
                  As the Principal of this remarkable institution, I am honored to lead a community dedicated 
                  to educational excellence, character development, and the holistic growth of every child.
                </p>
                <p>
                  At Bright Future School, we believe that education extends far beyond textbooks and 
                  examinations. Our philosophy centers on creating an environment where students feel safe 
                  to explore, question, and discover their passions. We recognize that each child is unique, 
                  with their own learning style, interests, and potential. Our dedicated team of educators 
                  works tirelessly to ensure that every student receives personalized attention and support 
                  to reach their full potential.
                </p>
                <p>
                  Our curriculum is designed to be comprehensive yet flexible, incorporating both traditional 
                  academic subjects and modern skills necessary for success in the 21st century. We emphasize 
                  critical thinking, creativity, collaboration, and communication – the four pillars that 
                  prepare our students for future challenges and opportunities.
                </p>
                <p>
                  Beyond academics, we are committed to character building and value education. We believe 
                  that true success comes not just from academic achievements but from developing empathy, 
                  integrity, responsibility, and respect for others. Our various programs and activities 
                  are designed to instill these values while providing students with opportunities to 
                  discover and develop their talents.
                </p>
                <p>
                  As we look towards the future, we remain committed to innovation in education while 
                  maintaining the values and traditions that have made our school a beacon of excellence. 
                  We continuously invest in our facilities, technology, and professional development to 
                  ensure that our students receive the best possible education.
                </p>
                <p>
                  I invite you to join our school family and be part of this incredible journey of learning, 
                  growth, and discovery. Together, we will continue to build bright futures for our children 
                  and our community.
                </p>
                <p className="text-right font-medium">
                  Warm regards,<br />
                  Dr. Sarah Johnson<br />
                  Principal, Bright Future School
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Achievements & Qualifications */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <BookOpen className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Qualifications & Achievements</h3>
                </div>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-purple-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Key Initiatives</h3>
                </div>
                <div className="space-y-6">
                  {initiatives.map((initiative, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{initiative.title}</h4>
                        <Badge variant="outline">{initiative.year}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{initiative.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vision for the Future */}
        <section>
          <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-0 shadow-xl text-white animate-scale-up">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Vision for the Future</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                "As we move forward, our commitment remains unchanged: to provide an education that not only 
                prepares our students for academic success but also empowers them to become compassionate 
                leaders who will make a positive difference in the world."
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-blue-100">Embracing new technologies and teaching methods</p>
                </div>
                <div>
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-blue-100">Building stronger connections with families and society</p>
                </div>
                <div>
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-blue-100">Maintaining highest standards in all we do</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Principal;
