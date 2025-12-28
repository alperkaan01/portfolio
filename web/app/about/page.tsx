import './about.css';
import PersonalIntro from '@/components/custom/personal-intro/personal-intro';
import HorizontalTimeline from '@/components/custom/horizontal-timeline/horizontal-timeline';
import SkillsSection from '@/components/custom/skills-section/skills-section';
import BeyondCode from '@/components/custom/beyond-code/beyond-code';

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Personal Introduction */}
      <PersonalIntro />

      {/* Horizontal Timeline Section */}
      <HorizontalTimeline />

      {/* Skills & Expertise Section */}
      <SkillsSection />

      {/* Beyond the Code Section */}
      <BeyondCode />
    </main>
  );
}
