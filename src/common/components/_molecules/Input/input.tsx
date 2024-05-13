import { InputTypes } from "../../../types";

const Input = ({
  className,
  type,
  width,
  height,
  name,
  placeholder,
  checked,
  onChange,
  size,
}: InputTypes) => {
  switch (size) {
    case "small":
      width = 200;
      height = 45;
      break;
    case "medium":
      width = 300;
      height = 45;
      break;
    case "large":
      width = 498;
      height = 45;
      break;
    default:
      break;
  }

  return (
    <input
      onChange={onChange}
      className={className}
      style={{ width: width, height: height }}
      size={size}
      placeholder={placeholder}
      type={type}
      name={name}
      checked={checked}
    />
  );
};

export default Input;
