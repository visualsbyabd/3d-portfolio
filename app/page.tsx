import {
  HeroSection,
  AboutSection,
  SkillsSection,
  TimelineSection,
  ProjectsCountSection,
  FeaturedProjectsSection,
  ContactSection,
  VideosFeaturedProjectsSection,
} from "@/components/home";

const Home = () => (
  <>
    <HeroSection />
    <ProjectsCountSection />
    <AboutSection />
    <TimelineSection />
    <FeaturedProjectsSection />
    <VideosFeaturedProjectsSection />
    <SkillsSection />
    <ContactSection />
  </>
);

export default Home;
