import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from '@/components/IntroAnimation';
import HeroSection from '@/components/HeroSection';
import ProblemSolution from '@/components/ProblemSolution';
import KeyFeatures from '@/components/KeyFeatures';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
      
      <main className={showIntro ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <HeroSection />
        <ProblemSolution />
        <KeyFeatures />
        <TeamSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
