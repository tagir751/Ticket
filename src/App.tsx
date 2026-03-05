import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import VideoSection from './sections/VideoSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import ProgramSection from './sections/ProgramSection';
import InstructorSection from './sections/InstructorSection';
import ParentsSection from './sections/ParentsSection';
import PricingSection from './sections/PricingSection';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <main>
        <Hero />
        <VideoSection />
        <ProblemSection />
        <SolutionSection />
        <ProgramSection />
        <InstructorSection />
        <ParentsSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
