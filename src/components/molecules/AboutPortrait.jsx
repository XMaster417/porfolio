import myPhoto from '../../assets/images/my_photo.png'

const AboutPortrait = () => {
  return (
    <div className="about-portrait">
      <div className="about-portrait__dots" aria-hidden="true" />
      <div className="about-portrait__frame">
        <img src={myPhoto} alt="Yael Charles" />
      </div>
      <blockquote className="about-portrait__quote">
        <span aria-hidden="true">&ldquo;</span>
        <p>Friendly, funny, definitely a great person...<br />and not just because I say it myself&rdquo;</p>
      </blockquote>
    </div>
  )
}

export default AboutPortrait
