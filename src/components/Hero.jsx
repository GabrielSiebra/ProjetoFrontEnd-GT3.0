import { useState, useEffect } from 'react'
import './Hero.css'
import heroImg from '../assets/WhiteSneaker.svg'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      subtitle: "Melhores ofertas personalizadas",
      title: "Queima de estoque Nike 🔥",
      description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      image: heroImg
    },
    {
      id: 1,
      subtitle: "Nova coleção de Outono",
      title: "Novos modelos Adidas",
      description: "Descubra a nova linha de calçados confortáveis para o seu dia a dia com até 30% de desconto.",
      image: heroImg
    },
    {
      id: 2,
      subtitle: "Apenas este fim de semana",
      title: "Tênis com até 50% OFF",
      description: "Aproveite as melhores marcas com preços imperdíveis. Estoque limitado, garanta o seu par agora!",
      image: heroImg
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-subtitle">{slides[currentSlide].subtitle}</span>
        <h1 className="hero-title">{slides[currentSlide].title}</h1>
        <p className="hero-description">{slides[currentSlide].description}</p>
        <button className="btn-primary">Ver Ofertas</button>
      </div>

      <div className="hero-image">
        <img src={slides[currentSlide].image} alt="Tênis em destaque" />
      </div>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
