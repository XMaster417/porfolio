import academicIcon from '../../assets/icons/academic_icon.svg'
import InfoBadge from '../atoms/InfoBadge'
import SectionLabel from '../atoms/SectionLabel'
import AboutPortrait from '../molecules/AboutPortrait'
import InterestCards from '../molecules/InterestCards'
import SocialLinks from '../molecules/SocialLinks'

const AboutMeSection = () => {
  return (
    <section id="about-me" className="about-section" aria-labelledby="about-title">
      <div className="about-section__layout">
        <article className="about-section__card">
          <SectionLabel label="ABOUT ME" />
          <h2 id="about-title">It's me,<br />Yael Charles</h2>

          <div className="about-section__study-row">
            <InfoBadge icon={academicIcon} label="B.S. in Computer Science" className="about-section__degree" />
            <span className="about-section__semester">7<sup>th</sup> Semester</span>
          </div>

          <p className="about-section__description">
            Currently going through my 7th semester. All along my journey I had developed a deep passion for creating digital solutions, specifically through immersive web and mobile development, network architecture and artificial intelligence (AI).
          </p>

          <InterestCards />

          <SocialLinks />
        </article>

        <div className="about-section__visual">
          <AboutPortrait />
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
