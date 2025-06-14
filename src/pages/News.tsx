
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: "Bright Future School Wins State Science Competition",
      date: "March 10, 2024",
      author: "Dr. Sarah Johnson",
      category: "Achievement",
      excerpt: "Our students brought home the first prize in the state-level science competition, showcasing their innovative projects and research skills.",
      featured: true
    },
    {
      title: "New Digital Learning Platform Launched",
      date: "March 5, 2024",
      author: "IT Department",
      category: "Technology",
      excerpt: "We're excited to introduce our new digital learning platform that enhances online education and student engagement.",
      featured: false
    },
    {
      title: "Spring Semester Registration Now Open",
      date: "February 28, 2024",
      author: "Admissions Office",
      category: "Admissions",
      excerpt: "Registration for the spring semester is now open. Limited seats available for various grade levels.",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest happenings, achievements, and announcements from our school community.
          </p>
        </div>

        <div className="space-y-8">
          {newsItems.map((news, index) => (
            <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up ${
              news.featured ? 'bg-gradient-to-br from-blue-50 to-purple-50' : 'bg-white'
            }`}>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant={news.featured ? "default" : "outline"}>
                      {news.category}
                    </Badge>
                    {news.featured && <Badge className="bg-orange-500">Featured</Badge>}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{news.author}</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{news.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{news.excerpt}</p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
