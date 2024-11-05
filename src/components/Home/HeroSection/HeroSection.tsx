import './HeroSection.css'
import heroImage from "../../../../public/assets/home/hero-section-image.png"
function HeroSection() {
  return (
    <div className='hero-section'>
       <div className='hero-info'>
        <p className='badge'>Digital Marketing</p>
        <h1>Work that we produce for our clients</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        <button>Get more details</button>
       </div>
       <div className='hero-image'>
        <img src={heroImage} alt="hero-image" />
       </div>
    </div>
  )
}

export default HeroSection