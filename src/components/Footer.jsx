import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="grid-layout">        
                <div className="column-brand">
                    <div className="logo-container">
                        <span className="logo-icon">{'>_'}</span> 
                        <span className="logo-text">Digital Store</span>
                    </div>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="social-links">
                        <FaFacebookF title="Facebook" />
                        <FaInstagram title="Instagram" />
                        <FaTwitter title="Twitter" />
                    </div>
                </div>
                <div className="column-links">
                    <h3>Informação</h3>
                    <ul>
                        <li><Link to="/sobre">Sobre Drip Store</Link></li>
                        <li><Link to="/seguranca">Segurança</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/trabalhe-conosco">Trabalhe conosco</Link></li>
                        <li><Link to="/pedidos">Meus Pedidos</Link></li>
                    </ul>
                </div>
                <div className="column-links">
                    <h3>Categorias</h3>
                    <ul>
                        <li><Link to="/produtos">Camisetas</Link></li>
                        <li><Link to="/produtos">Calças</Link></li>
                        <li><Link to="/produtos">Bonés</Link></li>
                        <li><Link to="/produtos">Headphones</Link></li>
                        <li><Link to="/produtos">Tênis</Link></li>
                    </ul>
                </div>
                <div className="column-contact">
                    <h3>Contato</h3>
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>

            <div className="footer-bottom">
                <hr className="footer-divider" />
                <p>@ 2022 Digital College</p>
            </div>
        </footer>
    );
};

export default Footer;