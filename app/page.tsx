import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import ExperienceSection from '@/components/experience-section';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import SkillsSection from '@/components/skills-section';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* <SiteHeader /> */}
      <main className="flex-1 w-full md:w-[90dvh] lg:w-[60%] mx-auto">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}