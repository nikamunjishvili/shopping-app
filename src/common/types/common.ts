export interface IconProps {
  width: number;
  height: number;
}

export interface ProductType {
  length: number;
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface ButtonType {
  className: string;
  children: string;
  onClick: () => void;
  src?: string;
}