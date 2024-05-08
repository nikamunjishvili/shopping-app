import { InputTypes } from "../../../types";

const Input = ({ className, type, name, placeholder,checked,onChange }:InputTypes) => {
  return (
    <input
    onChange={onChange}
      className={className}
      placeholder={placeholder}
      type={type}
      name={name}
      checked={checked}
    />
  );
};

export default Input;
