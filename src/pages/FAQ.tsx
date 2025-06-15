
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronRight, HelpCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import AnimatedSection from '@/components/AnimatedSection';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Admissions",
      color: "bg-blue-500",
      questions: [
        {
          question: "What are the admission requirements?",
          answer: "We require a completed application form, previous academic records, birth certificate, immunization records, and passport-size photographs. Age-appropriate assessments may be conducted for certain grade levels."
        },
        {
          question: "When can I apply for admission?",
          answer: "We have rolling admissions throughout the year with major intake periods in April and October. However, applications are accepted year-round based on seat availability."
        },
        {
          question: "Is there an entrance exam?",
          answer: "For students applying to grades 1-12, we conduct age-appropriate assessments to understand the child's learning level. For nursery and kindergarten, we focus on interaction and basic skills."
        },
        {
          question: "What documents are needed for international students?",
          answer: "International students need all standard documents plus visa documentation, certified translations of foreign documents, and additional health clearances as required by regulations."
        }
      ]
    },
    {
      category: "Academic Programs",
      color: "bg-green-500",
      questions: [
        {
          question: "What curriculum do you follow?",
          answer: "We offer both CBSE and Cambridge International curricula. Students can choose the board that best fits their future academic and career goals."
        },
        {
          question: "What are the class sizes?",
          answer: "We maintain small class sizes with a maximum of 20 students per class to ensure personalized attention and optimal learning outcomes."
        },
        {
          question: "Do you offer special support for learning difficulties?",
          answer: "Yes, we have a dedicated special education team that provides individualized support for students with learning differences, including dyslexia, ADHD, and other learning challenges."
        },
        {
          question: "Are there advanced placement or honors programs?",
          answer: "We offer advanced programs for gifted students, including accelerated learning tracks, research opportunities, and specialized STEM and arts programs."
        }
      ]
    },
    {
      category: "Fees & Financial Aid",
      color: "bg-red-500",
      questions: [
        {
          question: "What is the fee structure?",
          answer: "Fees vary by grade level, ranging from $1,800 annually for nursery to $3,000 for high school. This includes tuition, materials, and most activities. Additional fees apply for transportation and meals."
        },
        {
          question: "Are scholarships available?",
          answer: "Yes, we offer merit-based scholarships for outstanding academic performance and need-based financial aid for deserving students. Applications are reviewed annually."
        },
        {
          question: "What payment options are available?",
          answer: "We offer flexible payment plans including annual, bi-annual, and monthly payment options. Online payments, bank transfers, and check payments are accepted."
        },
        {
          question: "Is there a sibling discount?",
          answer: "Yes, we provide a 10% discount on tuition fees for the second child and subsequent siblings from the same family."
        }
      ]
    },
    {
      category: "School Policies",
      color: "bg-orange-500",
      questions: [
        {
          question: "What are the school timings?",
          answer: "Regular school hours are 8:00 AM to 3:30 PM, Monday through Friday. Extended care is available until 6:00 PM for working parents."
        },
        {
          question: "What is the attendance policy?",
          answer: "Students are expected to maintain at least 85% attendance. Excessive absences may require medical documentation and could affect academic progression."
        },
        {
          question: "How do you handle discipline issues?",
          answer: "We follow a positive discipline approach focusing on character building, natural consequences, and restorative practices. Our student handbook outlines all policies clearly."
        },
        {
          question: "What is your policy on technology use?",
          answer: "We integrate technology meaningfully into learning. Personal devices are allowed in higher grades with restrictions. We maintain strict internet safety and digital citizenship protocols."
        }
      ]
    },
    {
      category: "Health & Safety",
      color: "bg-red-600",
      questions: [
        {
          question: "What safety measures do you have in place?",
          answer: "We have 24/7 security, CCTV monitoring, controlled access points, emergency response protocols, and regular safety drills. All staff undergo background checks."
        },
        {
          question: "Is there a school nurse?",
          answer: "Yes, we have a qualified nurse on campus during school hours. We also have partnerships with nearby hospitals for emergency medical care."
        },
        {
          question: "How do you handle food allergies?",
          answer: "We work closely with families to accommodate food allergies and dietary restrictions. Our cafeteria can provide special meals, and we maintain strict protocols to prevent cross-contamination."
        },
        {
          question: "What is your COVID-19 policy?",
          answer: "We follow all government health guidelines and maintain flexible policies that can adapt to changing health requirements while ensuring continuous learning."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen font-nunito py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our school, admissions process, 
            academic programs, and policies. Can't find what you're looking for? Contact us!
          </p>
        </AnimatedSection>

        {/* Search Bar */}
        <AnimatedSection animation="slide-up" delay={200} className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-red-500"
            />
          </div>
        </AnimatedSection>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <AnimatedSection 
              key={categoryIndex} 
              animation="fade-in"
              delay={categoryIndex * 100}
            >
              <div className="flex items-center mb-6">
                <div className={`${category.color} w-4 h-4 rounded-full mr-3`}></div>
                <h2 className="text-2xl font-bold text-gray-800">{category.category}</h2>
                <Badge variant="outline" className="ml-3">
                  {category.questions.length} questions
                </Badge>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);

                  return (
                    <AnimatedSection 
                      key={faqIndex}
                      animation="slide-up"
                      delay={faqIndex * 50}
                    >
                      <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <HelpCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                            </div>
                            {isOpen ? (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-gray-500" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-6 pt-0">
                              <div className="bg-gray-50 rounded-lg p-4 ml-8">
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Contact Section */}
        <AnimatedSection animation="scale-up" delay={400} className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 border-0 shadow-xl text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto leading-relaxed">
                Our admissions team is here to help! Contact us for personalized assistance 
                with any questions about our school and programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                  Contact Admissions
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                  Schedule Visit
                </button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default FAQ;
