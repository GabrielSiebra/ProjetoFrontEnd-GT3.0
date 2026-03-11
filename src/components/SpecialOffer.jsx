import './SpecialOffer.css';

import offerImage from '../assets/SneakerOffer.svg';

const SpecialOffer = () => {
  return (
    <section className="special-offer">
      <div className="offer-image-container">
        <img src={offerImage} alt="Sapato em oferta especial" />
      </div>

      <div className="offer-content">
        <span className="offer-subtitle">Oferta especial</span>
        
        <h2 className="offer-title">
          Air Jordan edição de colecionador
        </h2>
        
        <p className="offer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        
        <button className="btn-primary">Ver Ofertas</button>
      </div>
    </section>
  );
};

export default SpecialOffer;