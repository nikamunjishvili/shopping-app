import { IconProps } from "../../../types";


const Input = ({className, placeholder, type, name}:IconProps) => {
  return (
    <Input
      className={className}
      placeholder={placeholder}
      type={type}
      name={name} />
  );
}

export default Input