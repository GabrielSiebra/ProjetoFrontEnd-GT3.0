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
                        <li><a href="#">Sobre Drip Store</a></li>
                        <li><a href="#">Segurança</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Trabalhe conosco</a></li>
                        <li><a href="#">Meus Pedidos</a></li>
                    </ul>
                </div>
                <div className="column-links">
                    <h3>Categorias</h3>
                    <ul>
                        <li><a href="#">Camisetas</a></li>
                        <li><a href="#">Calças</a></li>
                        <li><a href="#">Bonés</a></li>
                        <li><a href="#">Headphones</a></li>
                        <li><a href="#">Tênis</a></li>
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