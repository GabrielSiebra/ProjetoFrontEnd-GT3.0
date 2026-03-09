import logoImg from '../assets/logo-header.svg'
import 'primeicons/primeicons.css'
import './Header.css'

const Header = () => {
    return (
        <>
        <header className="header-container">
            <div className='header-top'>
                <div className="logo">
                    <img src={logoImg}/>
            </div>
            <div className="searchBox">
                <input type="text" placeholder="Pesquisar produtos..."/>
                <i className="pi pi-search search-icon"></i>
            </div>

                <div className="header-actions">
                    <a href="/cadastro" className="link-cadastre">Cadastre-se</a>
                    <button className="btn-entrar">Entrar</button>
                    <div className="cart-container">
                        <i className='pi pi-cart-plus cart-icon'></i>
                        <span className="cart-badge"></span>
                    </div>
                </div>
            </div>

            <nav className="header-nav">
                    <ul>
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/produtos">Produtos</a></li>
                        <li><a href="/categorias">Categorias</a></li>
                        <li><a href="/pedidos">Meus Pedidos</a></li>
                    </ul>
            </nav>
        </header>
        </>
    );
};

export default Header;