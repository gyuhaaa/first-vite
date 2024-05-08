const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex flex-col">
      {/* 헤더 */}
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
      {/* 섹션 */}
      <section className="bg-green-100 grow px-2">
        {/* 카드 리스트 */}
        <ul className="bg-red-100 mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4">
          {/* 카드 */}
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
        </ul>
      </section>
      {/* 푸터 */}
      <footer className="bg-yellow-100 px-2">footer</footer>
    </div>
  );
};

export default App;