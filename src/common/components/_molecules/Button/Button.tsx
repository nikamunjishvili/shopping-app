import { ButtonType } from "../../../types";

const Button = ({
  width,
  height,
  type = "secondary",
  className,
  children,
}: ButtonType) => {
  let backgroundColor;
  switch (type) {
    case "primary":
      backgroundColor = "red";
      break;
    case "secondary":
      backgroundColor = "#00B207";
      break;
    default:
      break;
  }

  return (
    <button
      type={`${type}`}
      className={className}
      style={{ backgroundColor: backgroundColor, height: height, width: width }}
    >
      {children}
    </button>
  );
};

export default Button;
