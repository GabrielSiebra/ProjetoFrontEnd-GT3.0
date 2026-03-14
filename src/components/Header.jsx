import { useState, useContext } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/logo-header.svg';
import 'primeicons/primeicons.css';
import './Header.css';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
    const { cartCount } = useContext(CartContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <header className="header-wrapper">
            <div className="header-container">
                <div className='header-top'>
                    
                    <i 
                        className="pi pi-bars menu-icon-mobile" 
                        onClick={() => setIsMenuOpen(true)}
                    ></i>

                    <div className="logo">
                        <Link to="/">
                            <img src={logoImg} alt="Logo Digital Store" />
                        </Link>
                    </div>
                    
                    <div className="searchBox desktop-only">
                        <input type="text" placeholder="Pesquisar produtos..."/>
                        <i className="pi pi-search search-icon"></i>
                    </div>
                    
                    <div className="header-actions desktop-only">
                        <a href="/cadastro" className="link-cadastre">Cadastre-se</a>
                        <button className="btn-entrar">Entrar</button>
                    </div>
                    <div className="header-icons-right">
                        <i className="pi pi-search mobile-search-icon"></i>
                        
                        <div className="cart-container">
                            <i className="pi pi-shopping-cart cart-icon"></i>
                            {cartCount > 0 && (
                                <span className="cart-badge">{cartCount}</span>
                            )}
                        </div>
                    </div>
                    
                </div>

                <nav className="header-nav desktop-only">
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                        <li><NavLink to="/produtos" className={({ isActive }) => isActive ? "active" : ""}>Produtos</NavLink></li>
                        <li><NavLink to="/categorias" className={({ isActive }) => isActive ? "active" : ""}>Categorias</NavLink></li>
                        <li><NavLink to="/pedidos" className={({ isActive }) => isActive ? "active" : ""}>Meus Pedidos</NavLink></li>
                    </ul>
                </nav>
                <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
                
                <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
                    <div className="drawer-header">
                        <h3>Páginas</h3>
                        <i className="pi pi-times close-icon" onClick={() => setIsMenuOpen(false)}></i>
                    </div>
                    
                    <nav className="drawer-nav">
                        <ul>
                            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                            <li><NavLink to="/produtos" onClick={() => setIsMenuOpen(false)}>Produtos</NavLink></li>
                            <li><NavLink to="/categorias" onClick={() => setIsMenuOpen(false)}>Categorias</NavLink></li>
                            <li><NavLink to="/pedidos" onClick={() => setIsMenuOpen(false)}>Meus Pedidos</NavLink></li>
                        </ul>
                    </nav>

                    <div className="drawer-footer">
                        <button className="btn-entrar-mobile">Entrar</button>
                        <a href="/cadastro" className="link-cadastre-mobile">Cadastre-se</a>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;