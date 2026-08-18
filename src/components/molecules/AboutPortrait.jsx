import myPhoto from '../../assets/images/my_photo.png'

const AboutPortrait = () => {
  return (
    <div className="about-portrait">
      <div className="about-portrait__dots" aria-hidden="true" />
      <div className="about-portrait__orbit" aria-hidden="true" />
      <div className="about-portrait__frame">
        <img src={myPhoto} alt="Yael Charles" />
      </div>
    </div>
  )
}

export default AboutPortrait
