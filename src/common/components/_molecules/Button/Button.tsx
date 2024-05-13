import { ButtonType } from "../../../types";

const Button = ({
  width,
  height,
  type = "submit",
  className,
  children,
  disabled,
  onClick,
  isLoading,
}: ButtonType): JSX.Element => {
  let backgroundColor;
  switch (type) {
    case "button":
      backgroundColor = "red";
      break;
    case "submit":
      backgroundColor = "#00B207";
      break;
    case "reset":
      backgroundColor = "#F2F2F2";
      break;
    default:
      break;
  }

  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      style={{
        backgroundColor: !disabled ? backgroundColor : "reset",
        height: height,
        width: width,
        cursor: disabled ? "" : "pointer",
      }}
      onClick={onClick}
    >
      <div style={{ display: 'flex', alignItems: "center", gap: '15px' }}>
        <span>{isLoading && "Loading..."}</span>
        {children}
      </div>
    </button>
  );
};

export default Button;
