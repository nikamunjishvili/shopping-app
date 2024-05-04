import { ButtonType } from "../../../types";

const Button = ({
  width,
  height,
  type = "secondary",
  className,
  children,
  disabled,
  onClick,
  isLoading,
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
      disabled={disabled}
      type={`${type}`}
      className={className}
      style={{
        backgroundColor: !disabled ? backgroundColor : "gray",
        height: height,
        width: width,
        cursor: disabled ? "" : "pointer",
      }}
      onClick={onClick}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>{isLoading && "Loading..."}</span>
        <> {children}</>
      </div>
    </button>
  );
};

export default Button;
