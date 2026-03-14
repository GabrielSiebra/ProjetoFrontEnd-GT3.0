import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, category, name, price, discountPrice }) => {
    return (
        <Link 
            to={`/produto/${id}`} 
            className="product-card" 
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div className="product-image">
                <img src={image} alt={name} />
            </div>
            
            <div className="product-info">
                <span className="product-category">{category}</span>
                <h3 className="product-name">{name}</h3>
                
                <div className="product-prices">
                    <span className="price-old">R$ {price}</span>
                    <span className="price-new">R$ {discountPrice}</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;