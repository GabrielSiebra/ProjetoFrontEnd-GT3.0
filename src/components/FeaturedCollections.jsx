import './FeaturedCollections.css';
import ColecaoSupreme from '../assets/ColecaoSupreme.svg'
import ColecaoAdidas from '../assets/ColecaoAdidas.svg'
import ColecaoBeatBass from '../assets/ColecaoBeatBass.svg'

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      discount: '30% off',
      title: 'Novo drop Supreme',
      image: ColecaoSupreme,
    },
    {
      id: 2,
      discount: '30% off',
      title: 'Coleção Adidas',
      image: ColecaoAdidas,
    },
    {
      id: 3,
      discount: '30% off',
      title: 'Novo Beats Bass',
      image: ColecaoBeatBass,
    }
  ];

  return (
    <section className="featured-collections">
      <h2>Coleções em destaque</h2>
      
      <div className="collections-grid">
        {collections.map((collection) => (
          <div key={collection.id} className="collection-card">
            <div className="collection-content">
              <span className="collection-discount">{collection.discount}</span>
              <h3 className="collection-title">{collection.title}</h3>
              <button className="btn-buy">Comprar</button>
            </div>
            <div className="collection-image">
              <img src={collection.image} alt={collection.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;