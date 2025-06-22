import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";
import AnimatedSection from "@/components/AnimatedSection";
import { schoolName } from "@/lib/utils";

const About = () => {
  return (
    <AnimatedPage className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#800000] mb-6">
            About {schoolName}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, we've been dedicated to nurturing young minds
            and building bright futures. Our commitment to excellence in
            education has made us a trusted name in the community.
          </p>
        </AnimatedSection>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={0}>
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide quality education that empowers students to become
                  confident, creative, and responsible global citizens through
                  innovative teaching methods and character development.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-red-600 to-red-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading educational institution that inspires
                  lifelong learning, fosters innovation, and develops future
                  leaders who make positive contributions to society.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-red-700 to-red-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Values
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Excellence, Integrity, Respect, Innovation, and Collaboration
                  guide everything we do. We believe in nurturing each child's
                  unique potential in a supportive environment.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* School History */}
        <AnimatedSection>
          <section className="mb-16">
            <Card className="bg-white border-0 shadow-xl overflow-hidden">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                      Our Rich History
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-red-500 to-red-600 w-3 h-3 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            1985 - Foundation
                          </h4>
                          <p className="text-gray-600">
                            Bright Future School was established with just 50
                            students and a vision to transform education.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-red-600 to-red-700 w-3 h-3 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            1995 - Expansion
                          </h4>
                          <p className="text-gray-600">
                            Added middle and high school programs, reaching 500+
                            students with modern facilities.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-red-700 to-red-800 w-3 h-3 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            2010 - Digital Revolution
                          </h4>
                          <p className="text-gray-600">
                            Pioneered technology integration with smart
                            classrooms and digital learning platforms.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-red-800 to-red-900 w-3 h-3 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            2024 - Present Day
                          </h4>
                          <p className="text-gray-600">
                            Now serving 2,500+ students with 150+ faculty
                            members and state-of-the-art facilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-100 via-red-50 to-red-100 rounded-2xl p-8 text-center">
                    <GraduationCap className="h-32 w-32 text-red-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      20+ Years of Excellence
                    </h3>
                    <p className="text-gray-700">
                      Graduating successful students who have made their mark in
                      various fields worldwide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>

        {/* Achievements */}
        <section className="mb-16">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Recognition and awards that reflect our commitment to excellence
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Best School Award",
                year: "2023",
                category: "Academic Excellence",
              },
              {
                title: "Innovation in Education",
                year: "2022",
                category: "Technology Integration",
              },
              {
                title: "Community Service Award",
                year: "2023",
                category: "Social Impact",
              },
              {
                title: "Sports Excellence",
                year: "2024",
                category: "Athletic Achievement",
              },
              {
                title: "Environmental Leadership",
                year: "2023",
                category: "Sustainability",
              },
              {
                title: "Arts & Culture Award",
                year: "2022",
                category: "Creative Excellence",
              },
              {
                title: "Teacher Training Excellence",
                year: "2024",
                category: "Professional Development",
              },
              {
                title: "Student Safety Award",
                year: "2023",
                category: "Campus Security",
              },
            ].map((achievement, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {achievement.title}
                    </h4>
                    <Badge className="mb-2 bg-red-500 hover:bg-red-600">
                      {achievement.year}
                    </Badge>
                    <p className="text-sm text-gray-600">
                      {achievement.category}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Leadership Team Preview */}
        <section>
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Experienced educators dedicated to student success
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Principal",
                experience: "15+ years",
                specialization: "Educational Leadership",
              },
              {
                name: "Prof. Michael Chen",
                role: "Vice Principal (Academic)",
                experience: "12+ years",
                specialization: "Curriculum Development",
              },
              {
                name: "Ms. Emily Rodriguez",
                role: "Vice Principal (Student Affairs)",
                experience: "10+ years",
                specialization: "Student Counseling",
              },
            ].map((leader, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-red-600 font-medium mb-2">
                      {leader.role}
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {leader.experience}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {leader.specialization}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default About;
