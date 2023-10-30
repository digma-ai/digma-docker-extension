import { ComponentType, ReactNode } from "react";

interface ButtonProps {
  title?: string;
  value?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isMenuOpen: boolean;
  ref?:
    | ((instance: HTMLButtonElement | null) => void)
    | React.RefObject<HTMLButtonElement>
    | null
    | undefined;
}

export interface MenuProps {
  onSelect: (value: string) => void;
  placeholder?: string;
  items?: {
    label: string;
    value: string;
  }[];
  value?: string;
  title: string;
  icon?: ReactNode;
  button?: ComponentType<ButtonProps>;
  disabled?: boolean;
  width?: number;
}

export interface MenuStyledComponentProps {
  $width: number;
}
