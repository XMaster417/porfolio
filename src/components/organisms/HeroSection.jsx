import myPhoto from '../../assets/images/my_photo.png'
import SocialLinks from '../molecules/SocialLinks'

const HeroSection = () => {
  return (
    <main id="home" className="hero-section">
      <div className="hero-section__glow" aria-hidden="true" />
      <section className="hero-section__content" aria-labelledby="hero-title">
        <div className="hero-section__portrait" aria-hidden="true">
          <div className="hero-section__portrait-orbit" />
          <div className="hero-section__portrait-dots" />
          <img src={myPhoto} alt="foto de perfil" />
        </div>
        <div className="hero-section__introduction">
          <p className="hero-section__eyebrow"><span>HELLO, I&apos;M</span><i /></p>
          <h1 id="hero-title">Yael Charles</h1>
          <SocialLinks />
        </div>
      </section>
    </main>
  )
}

export default HeroSection
