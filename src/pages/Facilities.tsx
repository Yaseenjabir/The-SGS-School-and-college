
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  FlaskConical, 
  Trophy, 
  Music, 
  Palette, 
  Monitor,
  Utensils,
  Bus,
  Shield,
  Wifi,
  Camera,
  Users
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      title: "Modern Library",
      description: "Extensive collection of books, digital resources, and quiet study spaces for all age groups.",
      features: ["10,000+ books", "Digital catalog", "Reading corners", "Study rooms"],
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      image: "photo-1481627834876-b7833e8f5570"
    },
    {
      title: "Science Laboratories",
      description: "State-of-the-art labs for Physics, Chemistry, Biology, and Computer Science with modern equipment.",
      features: ["Well-equipped labs", "Safety protocols", "Research facilities", "Interactive displays"],
      icon: FlaskConical,
      color: "from-green-500 to-emerald-500",
      image: "photo-1532094349884-543bc11b234d"
    },
    {
      title: "Sports Complex",
      description: "Comprehensive sports facilities including indoor courts, outdoor fields, and fitness equipment.",
      features: ["Basketball court", "Football field", "Swimming pool", "Gymnasium"],
      icon: Trophy,
      color: "from-orange-500 to-red-500",
      image: "photo-1571019613454-1cb2f99b2d8b"
    },
    {
      title: "Music & Performance Hall",
      description: "Professional-grade music rooms and auditorium for concerts, plays, and cultural events.",
      features: ["Concert hall", "Recording studio", "Practice rooms", "Instruments"],
      icon: Music,
      color: "from-purple-500 to-pink-500",
      image: "photo-1493225457124-a3eb161ffa5f"
    },
    {
      title: "Art Studios",
      description: "Creative spaces for visual arts, crafts, and design with professional art supplies and equipment.",
      features: ["Art workshops", "Pottery studio", "Digital art lab", "Exhibition space"],
      icon: Palette,
      color: "from-yellow-500 to-orange-500",
      image: "photo-1513475382585-d06e58bcb0e0"
    },
    {
      title: "Computer Labs",
      description: "Modern computer labs with latest technology for coding, design, and digital literacy programs.",
      features: ["Latest computers", "High-speed internet", "Software suite", "3D printers"],
      icon: Monitor,
      color: "from-indigo-500 to-blue-500",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Cafeteria",
      description: "Nutritious and delicious meals prepared fresh daily in our hygienic kitchen facilities.",
      features: ["Healthy menu", "Special diets", "Fresh ingredients", "Spacious dining"],
      icon: Utensils,
      color: "from-green-500 to-blue-500",
      image: "photo-1567620905732-2d1ec7ab7445"
    },
    {
      title: "Transportation",
      description: "Safe and reliable school bus service covering major routes across the city.",
      features: ["GPS tracking", "Trained drivers", "Safety protocols", "Multiple routes"],
      icon: Bus,
      color: "from-blue-500 to-purple-500",
      image: "photo-1544620347-c4fd4a3d5957"
    }
  ];

  const securityFeatures = [
    { icon: Shield, title: "24/7 Security", description: "Round-the-clock security guards and surveillance" },
    { icon: Camera, title: "CCTV Monitoring", description: "Comprehensive camera coverage across campus" },
    { icon: Users, title: "Visitor Management", description: "Strict visitor registration and monitoring system" },
    { icon: Wifi, title: "Emergency Systems", description: "Quick response systems and emergency protocols" }
  ];

  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            World-Class Facilities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our modern campus is designed to provide the best learning environment with 
            state-of-the-art facilities that support academic excellence and holistic development.
          </p>
        </div>

        {/* Main Facilities Grid */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-slide-up">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    {/* Image Section */}
                    <div className={`bg-gradient-to-br ${facility.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-center text-white">
                        <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <facility.icon className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-bold">{facility.title}</h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-center">
                      <p className="text-gray-700 leading-relaxed mb-6">{facility.description}</p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {facility.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs justify-center">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security & Safety */}
        <section className="mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Security & Safety</h2>
            <p className="text-xl text-gray-600">Your child's safety is our top priority</p>
          </div>

          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-0 shadow-xl animate-scale-up">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-br from-red-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Campus Statistics */}
        <section className="mb-16">
          <Card className="bg-white border-0 shadow-xl animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Campus by Numbers</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: "15", label: "Acres Campus", color: "from-green-500 to-emerald-500" },
                  { number: "50+", label: "Classrooms", color: "from-blue-500 to-cyan-500" },
                  { number: "8", label: "Science Labs", color: "from-purple-500 to-pink-500" },
                  { number: "3", label: "Sports Fields", color: "from-orange-500 to-red-500" },
                  { number: "1", label: "Swimming Pool", color: "from-cyan-500 to-blue-500" },
                  { number: "2", label: "Computer Labs", color: "from-indigo-500 to-purple-500" },
                  { number: "1", label: "Auditorium", color: "from-pink-500 to-rose-500" },
                  { number: "24/7", label: "Security", color: "from-red-500 to-orange-500" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                      <span className="text-white font-bold text-lg">{stat.number}</span>
                    </div>
                    <p className="text-gray-700 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Virtual Tour CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-0 shadow-xl text-white animate-scale-up">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6">Experience Our Campus</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                See our world-class facilities in person! Schedule a campus tour and discover 
                why Bright Future School is the perfect place for your child's education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                  Schedule Campus Tour
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                  Virtual Tour
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Facilities;
