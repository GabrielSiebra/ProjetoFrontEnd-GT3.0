import heroImg from '../assets/WhiteSneaker.svg'
import './Hero.css'

const Hero = () => {
    return(
        <>
        <section className="hero-banner">
            <div className="hero-content">
                <span className="hero-subtitle">Melhores ofertas personalizadas</span>
                <h1 className="hero-title">Queima de estoque Nike 🔥</h1>
                <p className="hero-description">
                Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>
                <button className="btn-primary">Ver Ofertas</button>
            </div>
            
            <div className="hero-image-container">
                <img src={heroImg} alt="Tênis Nike em destaque" />
            </div>
        </section>
        </>
    );
}
export default Hero;