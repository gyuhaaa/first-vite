import Button from "./Button";

const btnNm = ["메뉴1", "메뉴2", "로그인"];

const Navbar = () => {
    return (
        <nav className="hidden md:flex gap-4">
          {btnNm.map((v, i) => (<Button key={i} btnNm={v} />))}
        </nav>
    );
};

export default Navbar;