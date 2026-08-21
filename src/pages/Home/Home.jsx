import AboutMeSection from '../../components/organisms/AboutMeSection'
import ContactSection from '../../components/organisms/ContactSection'
import ExperienceSection from '../../components/organisms/ExperienceSection'
import HeroSection from '../../components/organisms/HeroSection'
import Navbar from '../../components/organisms/Navbar'
import ProjectsSection from '../../components/organisms/ProjectsSection'
import SkillsSection from '../../components/organisms/SkillsSection'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}

export default Home
