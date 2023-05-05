import React from "react";
import { useIconProps } from "./hooks";
import { IconProps } from "./types";

const IntellijLogoFlatIconComponent = (props: IconProps) => {
  const { size, color } = useIconProps(props);

  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        d="M0 0v16h16V0H0Zm2 2h4v1H5v4h1v2H2V7h1V3H2V2Zm8 0h1v5a2 2 0 0 1-1 2H9a3 3 0 0 1-2-1l1-1h2V2ZM1 13h6v1H1v-1Z"
      />
    </svg>
  );
};

export const IntellijLogoFlatIcon = React.memo(IntellijLogoFlatIconComponent);
