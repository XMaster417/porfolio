import AboutMeSection from '../../components/organisms/AboutMeSection'
import ExperienceSection from '../../components/organisms/ExperienceSection'
import HeroSection from '../../components/organisms/HeroSection'
import Navbar from '../../components/organisms/Navbar'
import ProjectsSection from '../../components/organisms/ProjectsSection'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  )
}

export default Home
