import ProductCard from '../components/ProductCard'
import sneakerImg from '../assets/sneaker-1.svg'
import Hero from '../components/Hero'
import FeaturedCollections from '../components/FeaturedCollections';

const Home = () => {
    const trendingProducts = [
  
  { id: 1, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakerImg },
  { id: 2, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakerImg },
  { id: 3, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakerImg },
  { id: 4, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakerImg },
  { id: 5, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakerImg },
  { id: 6, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakerImg },
  { id: 7, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakerImg },
  { id: 8, name: "Tênis K-Swiss V8 - Masculino", category: "Tênis", price: "200,00", discountPrice: "100,00", image: sneakerImg }
  ];
    return (
        <>
        <div className="home-container">

            <Hero/>

            <FeaturedCollections/>

            <section className="trending-products">
                <h2>Produtos em alta</h2>               
                <div className="product-grid">
                {trendingProducts.map((product) => (
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
            </section>
        </div>
        </>
    );
};

export default Home;