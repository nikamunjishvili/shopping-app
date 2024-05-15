import React from "react";

export interface IconProps {
  width: number;
  height: number;
  className?: string;
  onClick?: () => void;
}
export interface InputTypes {
  value: any;
  onKeyDown: any;
  className?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: any;
  width?: number;
  height?: number;
}
export interface ButtonType {
  className?: string;
  children?: React.ReactNode;
  width?: number;
  height: number;
  type?: "submit" | "reset" | "button" | undefined;
  backgroundColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
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
