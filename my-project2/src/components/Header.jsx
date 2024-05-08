import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-blue-100 px-2 py-4 flex justify-between">
            {/* 로고 */}
            <div className="bg-purple-100">로고</div>
            {/* 네비바 */}
            <Navbar />
            {/* 더보기 버튼 */}
            <button className="button-style inline-block md:hidden">...</button>
        </header>
    );
};

export default Header;