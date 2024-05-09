const Button = ({ btnNm, isMoreButton }) => {
    return (
      <button
        className={`button-style ${isMoreButton && "inline-block md:hidden"}`}
      >
        {btnNm}
      </button>
    );
  };
  
  export default Button;