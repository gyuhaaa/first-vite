import ButtonMore from "./ButtonMore";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-blue-100 px-2 py-4 flex justify-between">
            <Logo />
            <Navbar />
            <ButtonMore />
        </header>
    );
};

export default Header;