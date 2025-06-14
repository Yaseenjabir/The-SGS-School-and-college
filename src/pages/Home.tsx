
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Trophy, 
  ArrowRight,
  Star,
  Calendar,
  MapPin
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen font-nunito">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent leading-tight">
                Welcome to
                <br />
                Bright Future School
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                Where young minds bloom and dreams take flight!
                <br />
                <span className="text-lg text-gray-600">Nurturing Excellence from Nursery to 12th Grade</span>
              </p>
            </div>
            
            <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Discover More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/admissions">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-orange-400 text-orange-600 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="animate-scale-up grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                { icon: Users, number: '2,500+', label: 'Happy Students' },
                { icon: BookOpen, number: '150+', label: 'Expert Teachers' },
                { icon: Trophy, number: '50+', label: 'Awards Won' },
                { icon: Calendar, number: '35+', label: 'Years Experience' },
              ].map((stat, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</h3>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      A Message from Our Principal
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      "At Bright Future School, we believe every child is unique and capable of achieving greatness. 
                      Our dedicated team of educators works tirelessly to create an environment where students can 
                      explore, learn, and grow into confident, responsible citizens..."
                    </p>
                    <Link to="/principal">
                      <Button className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white">
                        Read Full Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="animate-scale-up">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-64 h-64 rounded-2xl mx-auto flex items-center justify-center">
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

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our School</h2>
            <p className="text-xl text-gray-600">Discover what makes us special</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Academic Excellence',
                description: 'Comprehensive curriculum from Nursery to 12th grade',
                link: '/academic',
                color: 'from-blue-500 to-cyan-500',
                icon: BookOpen
              },
              {
                title: 'World-Class Facilities',
                description: 'Modern classrooms, labs, library, and sports facilities',
                link: '/facilities',
                color: 'from-green-500 to-emerald-500',
                icon: MapPin
              },
              {
                title: 'Extra-Curricular Activities',
                description: 'Clubs, sports, arts, and enrichment programs',
                link: '/activities',
                color: 'from-purple-500 to-pink-500',
                icon: Trophy
              },
              {
                title: 'Admissions Open',
                description: 'Join our family! Applications now being accepted',
                link: '/admissions',
                color: 'from-orange-500 to-red-500',
                icon: Users
              },
              {
                title: 'School Gallery',
                description: 'View photos from our events and daily activities',
                link: '/gallery',
                color: 'from-yellow-500 to-orange-500',
                icon: Star
              },
              {
                title: 'Latest News',
                description: 'Stay updated with school events and achievements',
                link: '/news',
                color: 'from-indigo-500 to-purple-500',
                icon: Calendar
              },
            ].map((item, index) => (
              <Link key={index} to={item.link}>
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-slide-up">
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
  );
};

export default Home;
