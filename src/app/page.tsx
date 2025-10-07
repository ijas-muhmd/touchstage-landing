import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import CustomerLogosSection from '../components/CustomerLogosSection';
import TransformSection from '../components/TransformSection';
import TestimonialSection from '../components/TestimonialSection';
import SierraSpeaksSection from '../components/SierraSpeaksSection';
import MakeAISection from '../components/MakeAISection';
import SafeAndSecureSection from '../components/SafeAndSecureSection';
import CustomerResultsSection from '../components/CustomerResultsSection';
import CTASection from '../components/CTASection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <main className="flex grow flex-col focus-outline" id="main" tabIndex={-1}>
        {/* Hero Section */}
        <HeroSection />

        {/* Customer Logos Section */}
        <CustomerLogosSection />

        {/* Transform Customer Experience Section */}
        <TransformSection />

        {/* WeightWatchers Testimonial Section */}
        <TestimonialSection />

        {/* Sierra Speaks Section */}
        <SierraSpeaksSection />

        {/* Make AI Your Own Section */}
        <MakeAISection />

        {/* Safe and Secure Section */}
        <SafeAndSecureSection />

        {/* Customer Results Section */}
        <CustomerResultsSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}