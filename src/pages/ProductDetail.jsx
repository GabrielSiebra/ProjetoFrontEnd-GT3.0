import { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProductDetail.css'

import { CartContext } from '../contexts/CartContext'
import ProductCard from '../components/ProductCard' 

import CyanSneaker from '../assets/CyanSneaker.svg'
import YellowSneaker from '../assets/YellowSneaker.svg'
import PinkSneaker from '../assets/PinkSneaker.svg'
import BeigeSneaker from '../assets/BeigeSneaker.svg'
import GraySneaker from '../assets/GraySneaker.svg'

import sneakersImg from '../assets/sneaker-1.svg'
const ProductDetail = () => {
  const { id } = useParams(); 
  const { addToCart } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sizes = [39, 40, 41, 42, 43];
  const colors = ['#6EE1FF', '#FF6484', '#5D5D5D', '#6D70B7']; 

  const productGallery = [
    { image: CyanSneaker, bgColor: '#E2E3FF' },
    { image: YellowSneaker, bgColor: '#FFE8BC' },
    { image: PinkSneaker, bgColor: '#FFC0CB' },
    { image: BeigeSneaker, bgColor: '#ECD6C4' },
    { image: GraySneaker, bgColor: '#E8E8E8' }
  ];

  const relatedProducts = [
    { id: 1, name: "K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakersImg },
    { id: 2, name: "K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakersImg },
    { id: 3, name: "K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakersImg },
    { id: 4, name: "K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakersImg }
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productGallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === productGallery.length - 1 ? 0 : prev + 1));
  };

  const handleBuy = () => {
    if (!selectedSize || !selectedColor) {
      alert("Por favor, selecione um tamanho e uma cor antes de adicionar ao carrinho!");
      return;
    }

    const productToAdd = {
      id: id,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.00,
      image: productGallery[currentImageIndex].image, 
      size: selectedSize,
      color: selectedColor,
      quantity: 1
    };

    addToCart(productToAdd);
    alert("Produto adicionado ao carrinho com sucesso!");
  };

  return (
    <div className="product-detail-page">
      
      <div className="breadcrumbs">
        <span>Home</span> / <span>Produtos</span> / <span>Tênis</span> / <span>Nike</span> / 
        <span className="current"> Tênis Nike Revolution 6 Next Nature Masculino</span>
      </div>

      <div className="product-detail-container">
        
        <div className="product-gallery">
          <div 
            className="main-image-container" 
            style={{ backgroundColor: productGallery[currentImageIndex].bgColor }}
          >
            <i className="pi pi-angle-left arrow-gallery left" onClick={handlePrevImage}></i>
            <img src={productGallery[currentImageIndex].image} alt="Produto Principal" />
            <i className="pi pi-angle-right arrow-gallery right" onClick={handleNextImage}></i>
          </div>
          
          <div className="thumbnail-container">
            {productGallery.map((item, index) => (
              <div 
                key={index} 
                className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                style={{ backgroundColor: item.bgColor }}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={item.image} alt={`Miniatura ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info-details">
          <h1 className="product-title">Tênis Nike Revolution 6 Next Nature Masculino</h1>
          <span className="product-reference">Casual | Nike | REF:38416711</span>

          <div className="product-reviews">
            <span className="stars">⭐⭐⭐⭐☆</span>
            <span className="rating-score">4.7</span>
            <span className="rating-count">(90 avaliações)</span>
          </div>

          <div className="product-price-section">
            <span className="currency">R$</span>
            <span className="current-price">219</span>
            <span className="cents">,00</span>
            <span className="old-price">219,00</span>
          </div>

          <div className="product-description">
            <h4>Descrição do produto</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div className="product-options">
            <div className="option-group">
              <h4>Tamanho</h4>
              <div className="size-selector">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <h4>Cor</h4>
              <div className="color-selector">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <button className="btn-buy-large" onClick={handleBuy}>
            COMPRAR
          </button>
        </div>
      </div>

      <section className="related-products">
        <div className="section-header">
            <h2>Produtos Relacionados</h2>
            <Link to="/produtos" className="see-more-link">
                Ver todos <span>&rarr;</span>
            </Link>
        </div>
        
        
        <div className="product-grid">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              category={product.category}
              name={product.name}
              price={product.price}
              discountPrice={product.discountPrice}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;