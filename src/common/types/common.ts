export interface IconProps {
  width: number;
  height: number;
  className?: string;
}
export interface InputTypes {
  className: string;
  type: string;
  name: string;
  placeholder: string;
}
export interface ButtonType {
  className: string;
  children: React.ReactNode;
  width?: number;
  height: number;
  type: string;
  backgroundColor?: string;
}
