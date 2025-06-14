
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Calendar } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      title: "Annual Sports Day 2024",
      date: "March 2024",
      category: "Sports",
      description: "Students showcasing their athletic talents in various competitions"
    },
    {
      title: "Science Fair Exhibition",
      date: "February 2024",
      category: "Academic",
      description: "Innovative projects and experiments by our young scientists"
    },
    {
      title: "Cultural Festival",
      date: "January 2024",
      category: "Cultural",
      description: "Celebrating diversity through music, dance, and art"
    }
  ];

  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            School Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Capturing memories and moments from our vibrant school community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{item.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
