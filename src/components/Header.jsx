import { useContext } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/logo-header.svg';
import 'primeicons/primeicons.css';
import './Header.css';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
    const { cartCount } = useContext(CartContext);
    
    return (
        <header className="header-container">
            <div className='header-top'>
                <div className="logo">
                    <Link to="/">
                        <img src={logoImg} alt="Logo Digital Store" />
                    </Link>
                </div>
                
                <div className="searchBox">
                    <input type="text" placeholder="Pesquisar produtos..."/>
                    <i className="pi pi-search search-icon"></i>
                </div>
                
                <div className="header-actions">
                    <a href="/cadastro" className="link-cadastre">Cadastre-se</a>
                    <button className="btn-entrar">Entrar</button>
                    
                    <div className="cart-container">
                        <i className="pi pi-cart-plus cart-icon"></i>
                        {cartCount > 0 && (
                            <span className="cart-badge">{cartCount}</span>
                        )}
                    </div>
                </div>
            </div>

            <nav className="header-nav">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/produtos" className={({ isActive }) => isActive ? "active" : ""}>
                            Produtos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categorias" className={({ isActive }) => isActive ? "active" : ""}>
                            Categorias
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pedidos" className={({ isActive }) => isActive ? "active" : ""}>
                            Meus Pedidos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;