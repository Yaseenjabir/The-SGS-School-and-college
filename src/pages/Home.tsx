import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import AdmissionForm from '@/components/AdmissionForm';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Trophy, 
  ArrowRight,
  Star,
  Calendar,
  MapPin,
  Shield,
  Globe,
  Heart,
  Award,
  Phone,
  Mail,
  Lightbulb,
  Target,
  Play,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const [isAdmissionFormOpen, setIsAdmissionFormOpen] = useState(false);
  
  const heroSection = useInViewAnimation(0.2);
  const statsSection = useInViewAnimation(0.2);
  const whyChooseSection = useInViewAnimation(0.2);
  const principalSection = useInViewAnimation(0.2);
  const academicSection = useInViewAnimation(0.2);
  const facilitiesSection = useInViewAnimation(0.2);
  const achievementsSection = useInViewAnimation(0.2);
  const studentLifeSection = useInViewAnimation(0.2);
  const testimonialsSection = useInViewAnimation(0.2);
  const contactSection = useInViewAnimation(0.2);
  const quickLinksSection = useInViewAnimation(0.2);

  return (
    <>
      <div className="min-h-screen font-nunito">
        {/* Hero Section */}
        <section ref={heroSection.ref} className="relative py-20 lg:py-32 bg-gradient-to-br from-red-50 via-red-25 to-red-50 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNzk3OEEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 ${heroSection.isInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award className="h-4 w-4 mr-2" />
                  Excellence in Education Since 1985
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight">
                  SGS
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 mb-4 leading-relaxed">
                  Where Innovation Meets Education
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nurturing young minds from Nursery to 12th Grade with world-class facilities, expert teachers, and a curriculum designed for the future.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Take Virtual Tour
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-red-400 text-red-600 hover:bg-red-400 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300"
                    onClick={() => setIsAdmissionFormOpen(true)}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    CBSE Affiliated
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    ISO Certified
                  </div>
                </div>
              </div>
              
              <div className={`relative transition-all duration-1000 delay-300 ${heroSection.isInView ? 'animate-scale-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-400 to-red-500 rounded-3xl p-8 shadow-2xl">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                        <BookOpen className="h-8 w-8 text-white mx-auto mb-2" />
                        <p className="text-white font-semibold">Smart Classes</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                        <Users className="h-8 w-8 text-white mx-auto mb-2" />
                        <p className="text-white font-semibold">Expert Faculty</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                        <Trophy className="h-8 w-8 text-white mx-auto mb-2" />
                        <p className="text-white font-semibold">Awards</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                        <Globe className="h-8 w-8 text-white mx-auto mb-2" />
                        <p className="text-white font-semibold">Global Outlook</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center">
                      <GraduationCap className="h-16 w-16 text-red-500 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-gray-800">Shaping Tomorrow's Leaders</h3>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-pulse">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-full p-3 shadow-lg animate-pulse">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsSection.ref} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${statsSection.isInView ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { icon: Users, number: '2,500+', label: 'Happy Students' },
                { icon: BookOpen, number: '150+', label: 'Expert Teachers' },
                { icon: Trophy, number: '50+', label: 'Awards Won' },
                { icon: Calendar, number: '35+', label: 'Years Experience' },
              ].map((stat, index) => (
                <Card key={index} className="bg-white border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</h3>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section ref={whyChooseSection.ref} className="py-16 bg-gradient-to-br from-red-50 to-red-100">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-1000 ${whyChooseSection.isInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose SGS?</h2>
              <p className="text-xl text-gray-600">Discover what makes us the preferred choice for thousands of families</p>
            </div>
            
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${whyChooseSection.isInView ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                {
                  icon: Shield,
                  title: 'Safe Environment',
                  description: 'Secure campus with 24/7 monitoring and child-friendly infrastructure'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovative Teaching',
                  description: 'Modern pedagogy with smart classrooms and interactive learning'
                },
                {
                  icon: Target,
                  title: 'Holistic Development',
                  description: 'Focus on academics, sports, arts, and character building'
                },
                {
                  icon: Globe,
                  title: 'Global Perspective',
                  description: 'International curriculum standards and global exposure programs'
                },
                {
                  icon: Heart,
                  title: 'Caring Faculty',
                  description: 'Experienced teachers who genuinely care about each student'
                },
                {
                  icon: Award,
                  title: 'Proven Excellence',
                  description: 'Consistent academic achievements and recognition'
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Principal's Message Preview */}
        <section ref={principalSection.ref} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className={`bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-xl overflow-hidden transition-all duration-1000 ${principalSection.isInView ? 'animate-scale-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        A Message from Our Principal
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        "At SGS, we believe every child is unique and capable of achieving greatness. 
                        Our dedicated team of educators works tirelessly to create an environment where students can 
                        explore, learn, and grow into confident, responsible citizens..."
                      </p>
                      <Link to="/principal">
                        <Button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white">
                          Read Full Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div>
                      <div className="relative">
                        <div className="bg-gradient-to-br from-red-400 to-red-500 w-64 h-64 rounded-2xl mx-auto flex items-center justify-center">
                          <GraduationCap className="h-32 w-32 text-white" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-sm font-medium text-gray-800 mt-1">Excellence in Education</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Academic Programs Section */}
        <section ref={academicSection.ref} className="py-16 bg-gradient-to-br from-red-50 to-red-100">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-1000 ${academicSection.isInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Academic Programs</h2>
              <p className="text-xl text-gray-600">Comprehensive education for every stage of development</p>
            </div>
            
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${academicSection.isInView ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { title: 'Nursery', age: '3-4 years', color: 'from-pink-400 to-red-400' },
                { title: 'Primary', age: '5-10 years', color: 'from-red-400 to-red-500' },
                { title: 'Middle School', age: '11-13 years', color: 'from-red-500 to-red-600' },
                { title: 'High School', age: '14-18 years', color: 'from-red-600 to-red-700' }
              ].map((program, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className={`bg-gradient-to-br ${program.color} w-full h-24 rounded-xl mb-4 flex items-center justify-center`}>
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.age}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Highlight */}
        <section ref={facilitiesSection.ref} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-1000 ${facilitiesSection.isInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">World-Class Facilities</h2>
              <p className="text-xl text-gray-600">State-of-the-art infrastructure for comprehensive learning</p>
            </div>
            
            <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${facilitiesSection.isInView ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { title: 'Smart Classrooms', description: 'Interactive whiteboards and modern teaching aids' },
                { title: 'Science Labs', description: 'Fully equipped physics, chemistry, and biology labs' },
                { title: 'Sports Complex', description: 'Indoor and outdoor sports facilities' },
                { title: 'Library', description: 'Extensive collection of books and digital resources' },
                { title: 'Computer Lab', description: 'Latest technology and coding programs' },
                { title: 'Art Studio', description: 'Creative spaces for artistic expression' }
              ].map((facility, index) => (
                <Card key={index} className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section ref={achievementsSection.ref} className="py-16 bg-gradient-to-br from-red-50 to-red-100">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-1000 ${achievementsSection.isInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-600">Recognition for excellence in education</p>
            </div>
            
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${achievementsSection.isInView ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { title: 'Best School Award', year: '2023', icon: Trophy },
                { title: 'Excellence in Sports', year: '2023', icon: Award },
                { title: 'Academic Excellence', year: '2022', icon: Star },
                { title: 'Green School Certification', year: '2022', icon: Shield }
              ].map((achievement, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Life Section */}
        <section ref={studentLifeSection.ref} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-1000 ${studentLifeSection.isInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Vibrant Student Life</h2>
              <p className="text-xl text-gray-600">Beyond academics - building memories and friendships</p>
            </div>
            
            <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${studentLifeSection.isInView ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { title: 'Cultural Events', description: 'Annual festivals, competitions, and celebrations' },
                { title: 'Sports Activities', description: 'Inter-house competitions and tournaments' },
                { title: 'Field Trips', description: 'Educational excursions and learning adventures' }
              ].map((activity, index) => (
                <Card key={index} className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 w-full h-32 rounded-xl mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Parent Testimonials */}
        <section ref={testimonialsSection.ref} className="py-16 bg-gradient-to-br from-red-50 to-red-100">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-1000 ${testimonialsSection.isInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What Parents Say</h2>
              <p className="text-xl text-gray-600">Hear from our satisfied parent community</p>
            </div>
            
            <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${testimonialsSection.isInView ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                {
                  text: "SGS has been instrumental in my child's overall development. The teachers are caring and the facilities are excellent.",
                  author: "Mrs. Sharma",
                  role: "Parent of Grade 8 student"
                },
                {
                  text: "The school's focus on both academics and extracurricular activities has helped my daughter become more confident and well-rounded.",
                  author: "Mr. Patel",
                  role: "Parent of Grade 10 student"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section ref={contactSection.ref} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className={`bg-gradient-to-br from-red-500 to-red-600 border-0 shadow-xl transition-all duration-1000 ${contactSection.isInView ? 'animate-scale-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <CardContent className="p-8 lg:p-12 text-center text-white">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Ready to Join Our School Family?</h2>
                    <p className="text-xl mb-8 opacity-90">Contact us today to schedule a visit or learn more about admissions</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                      <div className="flex items-center justify-center">
                        <Phone className="h-5 w-5 mr-2" />
                        <span>+92 307 9302311</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Mail className="h-5 w-5 mr-2" />
                        <span>info@sgs.edu</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact">
                        <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl">
                          Contact Us
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg rounded-xl"
                        onClick={() => setIsAdmissionFormOpen(true)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section ref={quickLinksSection.ref} className="py-16 bg-gradient-to-br from-red-50 to-red-100">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-1000 ${quickLinksSection.isInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our School</h2>
              <p className="text-xl text-gray-600">Discover what makes us special</p>
            </div>
            
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${quickLinksSection.isInView ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                {
                  title: 'Academic Excellence',
                  description: 'Comprehensive curriculum from Nursery to 12th grade',
                  link: '/academic',
                  color: 'from-red-500 to-red-600',
                  icon: BookOpen
                },
                {
                  title: 'World-Class Facilities',
                  description: 'Modern classrooms, labs, library, and sports facilities',
                  link: '/facilities',
                  color: 'from-red-400 to-red-500',
                  icon: MapPin
                },
                {
                  title: 'Extra-Curricular Activities',
                  description: 'Clubs, sports, arts, and enrichment programs',
                  link: '/activities',
                  color: 'from-red-600 to-red-700',
                  icon: Trophy
                },
                {
                  title: 'Admissions Open',
                  description: 'Join our family! Applications now being accepted',
                  link: '/admissions',
                  color: 'from-red-500 to-red-600',
                  icon: Users
                },
                {
                  title: 'School Gallery',
                  description: 'View photos from our events and daily activities',
                  link: '/gallery',
                  color: 'from-red-400 to-red-500',
                  icon: Star
                },
                {
                  title: 'Latest News',
                  description: 'Stay updated with school events and achievements',
                  link: '/news',
                  color: 'from-red-600 to-red-700',
                  icon: Calendar
                },
              ].map((item, index) => (
                <Link key={index} to={item.link}>
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className={`bg-gradient-to-br ${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Admission Form Modal */}
      <AdmissionForm open={isAdmissionFormOpen} onOpenChange={setIsAdmissionFormOpen} />
    </>
  );
};

export default Home;
