import { ButtonType } from "../../../types";

const Button = ({ className, children, onClick, src}: ButtonType) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
      <img src={src} alt="" />
    </button>
  );
};

export default Button;
