import {
  HeroSection,
  AboutSection,
  TimelineSection,
  ProjectsCountSection,
  FeaturedProjectsSection,
  ContactSection,
  VideosFeaturedProjectsSection,
  DesignsFeaturedProjectsSection,
} from "@/components/home";

const Home = () => (
  <>
    <HeroSection />
    <ProjectsCountSection />
    <AboutSection />
    <TimelineSection />
    <FeaturedProjectsSection />
    <VideosFeaturedProjectsSection />
    <DesignsFeaturedProjectsSection />
    <ContactSection />
  </>
);

export default Home;
