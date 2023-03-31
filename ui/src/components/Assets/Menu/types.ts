import { ComponentType, ReactNode } from "react";

interface ButtonProps {
  title?: string;
  value?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isMenuOpen: boolean;
}

export interface MenuProps {
  onSelect: (value: string) => void;
  placeholder?: string;
  items?: string[];
  value?: string;
  title: string;
  icon?: ReactNode;
  button?: ComponentType<ButtonProps>;
  disabled?: boolean;
}
