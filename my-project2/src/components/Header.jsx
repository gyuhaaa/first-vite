const Header = () => {
    return (
        <header className="bg-blue-100 px-2 py-4 flex justify-between">
        {/* 로고 */}
        <div className="bg-purple-100">로고</div>
        {/* 네비바 */}
        <nav className="hidden md:flex gap-4">
          {/* 버튼1 */}
          <button className="button-style">메뉴1</button>
          {/* 버튼2 */}
          <button className="button-style">메뉴2</button>
          {/* 버튼3 */}
          <button className="button-style">로그인</button>
        </nav>
        {/* 더보기 버튼 */}
        <button className="button-style inline-block md:hidden">...</button>
      </header>
    );
};

export default Header;