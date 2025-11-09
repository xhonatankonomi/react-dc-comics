import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-content-wrapper">
                <Logo />
                <Navbar />
            </div>
        </header>
    );
};

export default Header;