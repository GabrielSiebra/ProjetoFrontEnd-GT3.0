const Header = () => {
    return (
        <>
        <header className="header-container">
            <div className="logo">
                <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg" />
            </div>
            <div className="searchBox">
                <input type="text" placeholder="Pesquisar produtos..."/>
            </div>
        </header>
        </>
    );
};

export default Header;