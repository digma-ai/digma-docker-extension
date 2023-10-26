import { MemoExoticComponent } from "react";
import { IconProps } from "../../../common/icons/types";

export interface AssetTypeListItemProps {
  id: string;
  label?: string;
  icon?: MemoExoticComponent<(props: IconProps) => JSX.Element>;
  entryCount: number;
  isSelected: boolean;
}

export interface ContainerProps {
  $isSelected: boolean;
  $hasEntries: boolean;
}

export type EntryCountProps = ContainerProps;
