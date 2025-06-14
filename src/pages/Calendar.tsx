
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const Calendar = () => {
  const events = [
    {
      date: "March 15, 2024",
      title: "Parent-Teacher Conference",
      time: "9:00 AM - 5:00 PM",
      location: "All Classrooms",
      type: "Academic",
      color: "bg-blue-500"
    },
    {
      date: "March 22, 2024",
      title: "Science Fair",
      time: "10:00 AM - 3:00 PM",
      location: "Main Auditorium",
      type: "Competition",
      color: "bg-green-500"
    },
    {
      date: "April 5, 2024",
      title: "Spring Break Begins",
      time: "All Day",
      location: "School Closed",
      type: "Holiday",
      color: "bg-orange-500"
    },
    {
      date: "April 15, 2024",
      title: "School Resumes",
      time: "8:00 AM",
      location: "All Campus",
      type: "Academic",
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Academic Calendar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with important dates, events, and holidays throughout the academic year.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center space-x-4">
                    <div className={`${event.color} w-4 h-4 rounded-full`}></div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span className="text-gray-600">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">{event.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
