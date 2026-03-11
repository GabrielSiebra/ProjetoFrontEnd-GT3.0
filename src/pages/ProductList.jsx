import ProductCard from '../components/ProductCard';
import './ProductList.css';

import sneakersImg from '../assets/sneaker-1.svg'; 

const ProductList = () => {

  const products = [
    { id: 1, name: "Tênis Nike Revolution 6 Next Nature Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakersImg },
    { id: 2, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakersImg },
    { id: 3, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakersImg },
    { id: 4, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakersImg },
    { id: 5, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakersImg },
    { id: 6, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakersImg },
  ];

  return (
    <div className="product-list-page">
      
      <div className="search-results-header">
        <span className="results-text">
          Resultados para "Tênis" - <strong>389 produtos</strong>
        </span>
        
        <div className="sort-by">
          <label htmlFor="sort">Ordenar por:</label>
          <select id="sort" className="sort-select">
            <option value="relevance">Mais relevantes</option>
            <option value="lowest-price">Menor preço</option>
            <option value="highest-price">Maior preço</option>
          </select>
        </div>
      </div>

      <div className="product-list-container">
        
        <aside className="filter-sidebar">
          <h3 className="filter-title">Filtrar por</h3>
          <hr className="filter-divider" />

          <div className="filter-group">
            <h4>Marca</h4>
            <label className="checkbox-label"><input type="checkbox" /> Adidas</label>
            <label className="checkbox-label"><input type="checkbox" /> Balenciaga</label>
            <label className="checkbox-label"><input type="checkbox" /> K-Swiss</label>
            <label className="checkbox-label"><input type="checkbox" /> Nike</label>
            <label className="checkbox-label"><input type="checkbox" /> Puma</label>
          </div>

          <div className="filter-group">
            <h4>Categoria</h4>
            <label className="checkbox-label"><input type="checkbox" /> Esporte e lazer</label>
            <label className="checkbox-label"><input type="checkbox" /> Casual</label>
            <label className="checkbox-label"><input type="checkbox" /> Utilitário</label>
            <label className="checkbox-label"><input type="checkbox" /> Corrida</label>
          </div>

          <div className="filter-group">
            <h4>Gênero</h4>
            <label className="checkbox-label"><input type="checkbox" /> Masculino</label>
            <label className="checkbox-label"><input type="checkbox" /> Feminino</label>
            <label className="checkbox-label"><input type="checkbox" /> Unisex</label>
          </div>

          <div className="filter-group">
            <h4>Estado</h4>
            <label className="radio-label"><input type="radio" name="product-state" value="novo" /> Novo</label>
            <label className="radio-label"><input type="radio" name="product-state" value="usado" /> Usado</label>
          </div>
        </aside>

        
        <main className="product-listing">
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                category={product.category}
                name={product.name}
                price={product.price}
                discountPrice={product.discountPrice}
              />
            ))}
          </div>
        </main>

      </div>
    </div>
  );
};

export default ProductList;