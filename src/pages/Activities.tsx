
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Music, 
  Palette, 
  Theater, 
  Users, 
  BookOpen,
  Camera,
  Gamepad2,
  Heart,
  Lightbulb
} from 'lucide-react';

const Activities = () => {
  const categories = [
    {
      title: "Sports & Athletics",
      icon: Trophy,
      color: "from-orange-500 to-red-500",
      activities: [
        { name: "Basketball", description: "Inter-school tournaments and leagues", age: "Grades 3-12" },
        { name: "Football/Soccer", description: "Team training and competitive matches", age: "Grades 1-12" },
        { name: "Swimming", description: "Learn to swim and competitive swimming", age: "All Grades" },
        { name: "Tennis", description: "Individual coaching and tournaments", age: "Grades 5-12" },
        { name: "Athletics", description: "Track and field events", age: "Grades 4-12" },
        { name: "Martial Arts", description: "Discipline and self-defense training", age: "Grades 2-12" }
      ]
    },
    {
      title: "Performing Arts",
      icon: Music,
      color: "from-purple-500 to-pink-500",
      activities: [
        { name: "School Choir", description: "Vocal training and performances", age: "Grades 3-12" },
        { name: "Orchestra", description: "Instrumental ensemble", age: "Grades 5-12" },
        { name: "Drama Club", description: "Theater productions and acting", age: "Grades 4-12" },
        { name: "Dance Troupe", description: "Various dance forms and performances", age: "All Grades" },
        { name: "Public Speaking", description: "Debate and oratory skills", age: "Grades 6-12" },
        { name: "Musical Theater", description: "Combined music and drama", age: "Grades 7-12" }
      ]
    },
    {
      title: "Visual Arts & Crafts",
      icon: Palette,
      color: "from-yellow-500 to-orange-500",
      activities: [
        { name: "Art Club", description: "Painting, drawing, and mixed media", age: "All Grades" },
        { name: "Pottery & Ceramics", description: "Clay work and sculpture", age: "Grades 4-12" },
        { name: "Photography", description: "Digital and traditional photography", age: "Grades 6-12" },
        { name: "Graphic Design", description: "Digital art and design", age: "Grades 8-12" },
        { name: "Crafts Workshop", description: "Handmade crafts and DIY projects", age: "Grades 1-8" },
        { name: "Fashion Design", description: "Clothing design and sewing", age: "Grades 9-12" }
      ]
    },
    {
      title: "Academic & STEM",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
      activities: [
        { name: "Science Olympiad", description: "Competitive science challenges", age: "Grades 6-12" },
        { name: "Math Club", description: "Problem-solving and competitions", age: "Grades 4-12" },
        { name: "Robotics Team", description: "Build and program robots", age: "Grades 7-12" },
        { name: "Coding Club", description: "Programming and app development", age: "Grades 5-12" },
        { name: "Quiz Bowl", description: "Academic knowledge competitions", age: "Grades 8-12" },
        { name: "Research Society", description: "Independent research projects", age: "Grades 10-12" }
      ]
    },
    {
      title: "Community Service",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      activities: [
        { name: "Environmental Club", description: "Eco-friendly initiatives", age: "Grades 5-12" },
        { name: "Community Outreach", description: "Local volunteer programs", age: "Grades 6-12" },
        { name: "Peer Tutoring", description: "Student helping students", age: "Grades 8-12" },
        { name: "Blood Donation Drive", description: "Health awareness campaigns", age: "Grades 11-12" },
        { name: "Food Bank Support", description: "Hunger relief initiatives", age: "Grades 4-12" },
        { name: "Senior Care Visits", description: "Connecting with elderly community", age: "Grades 7-12" }
      ]
    },
    {
      title: "Special Interest Clubs",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      activities: [
        { name: "Chess Club", description: "Strategic thinking and tournaments", age: "Grades 2-12" },
        { name: "Book Club", description: "Reading discussions and literacy", age: "Grades 4-12" },
        { name: "Gardening Club", description: "School garden maintenance", age: "Grades 1-8" },
        { name: "Cooking Club", description: "Culinary skills and nutrition", age: "Grades 6-12" },
        { name: "Student Council", description: "School leadership and governance", age: "Grades 5-12" },
        { name: "Yearbook Committee", description: "School publication", age: "Grades 9-12" }
      ]
    }
  ];

  const events = [
    {
      title: "Annual Sports Day",
      description: "Inter-house competitions and athletic events for all students",
      month: "November"
    },
    {
      title: "Cultural Festival",
      description: "Showcase of music, dance, drama, and art from various cultures",
      month: "February"
    },
    {
      title: "Science Fair",
      description: "Student research projects and scientific innovations display",
      month: "March"
    },
    {
      title: "Talent Show",
      description: "Platform for students to showcase their unique talents",
      month: "December"
    },
    {
      title: "Inter-School Competitions",
      description: "Various academic and sports competitions with other schools",
      month: "Throughout Year"
    },
    {
      title: "Community Service Week",
      description: "School-wide community service and social awareness activities",
      month: "October"
    }
  ];

  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Activities & Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond academics, we offer a rich variety of extracurricular activities that help students 
            discover their passions, develop new skills, and build lifelong friendships.
          </p>
        </div>

        {/* Activity Categories */}
        <section className="mb-16">
          <div className="space-y-12">
            {categories.map((category, index) => (
              <div key={index} className="animate-slide-up">
                <div className="flex items-center mb-8">
                  <div className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mr-4`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.activities.map((activity, actIdx) => (
                    <Card key={actIdx} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-semibold text-gray-800">{activity.name}</CardTitle>
                        <Badge variant="outline" className="w-fit text-xs">{activity.age}</Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Annual Events */}
        <section className="mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Annual Events & Competitions</h2>
            <p className="text-xl text-gray-600">Major events that bring our school community together</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{event.description}</p>
                  <Badge className="bg-gradient-to-r from-orange-400 to-red-500">{event.month}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <Card className="bg-white border-0 shadow-xl animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                Why Participate in Activities?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Social Skills",
                    description: "Build friendships and learn teamwork through collaborative activities"
                  },
                  {
                    icon: Trophy,
                    title: "Leadership",
                    description: "Develop leadership qualities and take on responsibility roles"
                  },
                  {
                    icon: Lightbulb,
                    title: "Creativity",
                    description: "Express creativity and explore artistic talents in various mediums"
                  },
                  {
                    icon: Heart,
                    title: "Character Building",
                    description: "Develop empathy, responsibility, and strong moral values"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Join Activities CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-0 shadow-xl text-white animate-scale-up">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6">Find Your Passion</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                With over 30 different activities and clubs, there's something for everyone. 
                Join us and discover new interests while making lifelong memories!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                  Join an Activity
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                  Activity Calendar
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Activities;
