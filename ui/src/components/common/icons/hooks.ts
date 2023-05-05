import { useTheme } from "@mui/material";
import { useMemo } from "react";
import { IconProps } from "./types";

export const DEFAULT_ICON_SIZE = 12;

export const useIconProps = (props: IconProps): IconProps => {
  const theme = useTheme();
  const defaultColor = theme.palette.mode === "light" ? "#086dd7" : "#fff";
  const color: string = useMemo(
    () => props.color || defaultColor,
    [props.color, defaultColor]
  );
  const size: number = useMemo(
    () => props.size || DEFAULT_ICON_SIZE,
    [props.size]
  );
  return { color, size };
};
