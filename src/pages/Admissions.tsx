
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  Users, 
  GraduationCap,
  Clock,
  AlertCircle,
  Download
} from 'lucide-react';

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Application Submission",
      description: "Complete and submit the online application form with required documents",
      timeline: "Rolling admissions throughout the year"
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Our team reviews your application and supporting documents",
      timeline: "3-5 business days"
    },
    {
      step: 3,
      title: "Assessment & Interview",
      description: "Student assessment and parent interview (age-appropriate)",
      timeline: "Within 1 week of document approval"
    },
    {
      step: 4,
      title: "Admission Decision",
      description: "Receive admission decision and enrollment package",
      timeline: "Within 48 hours of assessment"
    }
  ];

  const documents = [
    "Completed application form",
    "Birth certificate (certified copy)",
    "Previous academic records/report cards",
    "Immunization records",
    "Passport-size photographs (4 copies)",
    "Transfer certificate (if applicable)",
    "Parent/Guardian ID proof",
    "Proof of residence"
  ];

  const gradeWiseFees = [
    { grade: "Nursery - KG", monthlyFee: "$150", annualFee: "$1,800", admissionFee: "$200" },
    { grade: "Grade 1-3", monthlyFee: "$180", annualFee: "$2,160", admissionFee: "$250" },
    { grade: "Grade 4-6", monthlyFee: "$200", annualFee: "$2,400", admissionFee: "$300" },
    { grade: "Grade 7-9", monthlyFee: "$220", annualFee: "$2,640", admissionFee: "$350" },
    { grade: "Grade 10-12", monthlyFee: "$250", annualFee: "$3,000", admissionFee: "$400" }
  ];

  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Admissions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our vibrant learning community! We welcome students from Nursery to 12th grade 
              who are eager to learn, grow, and make a positive impact in the world.
            </p>
          </div>
        </AnimatedSection>

        {/* Key Information Cards */}
        <AnimatedSection animation="slide-up" className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Rolling Admissions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Applications accepted year-round with multiple intake periods. Apply anytime!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Small Class Sizes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Maximum 20 students per class ensuring personalized attention for every child.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">All Grades Welcome</h3>
                <p className="text-gray-700 leading-relaxed">
                  From Nursery to 12th grade, we offer comprehensive education for all age groups.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Admission Process */}
        <section className="mb-16">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Admission Process</h2>
              <p className="text-xl text-gray-600">Simple steps to join our school family</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionSteps.map((step, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="text-xs text-orange-600">{step.timeline}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Required Documents */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <section>
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-800 flex items-center">
                  <FileText className="mr-3 h-8 w-8 text-red-500" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Document Checklist</h4>
                    <div className="space-y-3">
                      {documents.map((doc, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-700">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
                    <div className="flex items-start space-x-3 mb-4">
                      <AlertCircle className="h-6 w-6 text-orange-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Important Notes</h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li>• All documents must be original or certified copies</li>
                          <li>• International students need additional visa documentation</li>
                          <li>• Transfer students require academic transcripts</li>
                          <li>• Documents in foreign languages need certified translations</li>
                        </ul>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download Checklist
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>

        {/* Fee Structure */}
        <section className="mb-16">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Fee Structure</h2>
              <p className="text-xl text-gray-600">Transparent and competitive pricing for quality education</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up">
            <div className="space-y-6">
              {gradeWiseFees.map((fee, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{fee.grade}</h3>
                        <Badge variant="outline" className="mt-2">Academic Year 2024-25</Badge>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <DollarSign className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">Monthly Fee</p>
                        <p className="text-xl font-bold text-gray-800">{fee.monthlyFee}</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <Calendar className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">Annual Fee</p>
                        <p className="text-xl font-bold text-gray-800">{fee.annualFee}</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <FileText className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">Admission Fee</p>
                        <p className="text-xl font-bold text-gray-800">{fee.admissionFee}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" className="mt-8">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Additional Information</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Payment Options</h4>
                    <p>Annual, bi-annual, or monthly payment plans available</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scholarships</h4>
                    <p>Merit-based and need-based financial aid available</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sibling Discount</h4>
                    <p>10% discount on fees for siblings</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </section>

        {/* Call to Action */}
        <AnimatedSection animation="scale-up">
          <section className="text-center">
            <Card className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 border-0 shadow-xl text-white">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-6">Ready to Join Our Family?</h2>
                <p className="text-xl mb-8 text-red-100">
                  Start your child's journey towards a bright future today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg">
                    Apply Online Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg">
                    Schedule Campus Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Admissions;
