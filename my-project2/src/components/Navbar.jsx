const Navbar = () => {
    return (
        <nav className="hidden md:flex gap-4">
          {/* 버튼1 */}
          <button className="button-style">메뉴1</button>
          {/* 버튼2 */}
          <button className="button-style">메뉴2</button>
          {/* 버튼3 */}
          <button className="button-style">로그인</button>
        </nav>
    );
};

export default Navbar;