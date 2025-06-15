
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import GoogleMap from '@/components/GoogleMap';

interface MapSectionProps {
  address: string;
}

const MapSection = ({ address }: MapSectionProps) => {
  return (
    <AnimatedSection className="mt-16">
      <Card className="bg-white border-0 shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">Visit Our Campus</h2>
            <p className="text-red-100">
              Come see our beautiful facilities and meet our amazing team!
            </p>
          </div>
          <GoogleMap 
            address={address}
            className="h-96"
          />
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default MapSection;
