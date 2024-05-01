import { InputTypes } from "../../../types";

const Input = ({ className, type, name, placeholder }:InputTypes) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
};

export default Input;
