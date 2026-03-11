import './CategoryIcons.css';

import { PiTShirt, PiPants, PiBaseballCap, PiHeadphones, PiSneaker } from "react-icons/pi";

const CategoryIcons = () => {
  const categories = [
    { id: 1, label: 'Camisetas', icon: <PiTShirt size={40} color="#8F8F8F" /> },
    { id: 2, label: 'Calças', icon: <PiPants size={40} color="#8F8F8F" /> },
    { id: 3, label: 'Bonés', icon: <PiBaseballCap size={40} color="#8F8F8F" /> },
    { id: 4, label: 'Headphones', icon: <PiHeadphones size={40} color="#8F8F8F" /> },
    { id: 5, label: 'Tênis', icon: <PiSneaker size={40} color="#8F8F8F" /> },
  ];

  return (
    <section className="category-icons-section">
      <h2>Coleções em destaque</h2>
      
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            
            <div className="icon-container">
              {category.icon}
            </div>
            
            <span className="category-label">{category.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryIcons;