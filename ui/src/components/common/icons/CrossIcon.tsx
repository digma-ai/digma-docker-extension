import React from "react";
import { useIconProps } from "./hooks";
import { IconProps } from "./types";

const CrossIconComponent = (props: IconProps) => {
  const { size, color } = useIconProps(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        d="M8 8.93 4.73 12.2a.63.63 0 0 1-.46.18.63.63 0 0 1-.47-.18.63.63 0 0 1-.18-.47c0-.19.06-.34.18-.46L7.07 8 3.8 4.73a.63.63 0 0 1-.18-.46c0-.2.06-.35.18-.47a.63.63 0 0 1 .47-.18c.19 0 .34.06.46.18L8 7.07l3.27-3.27a.63.63 0 0 1 .46-.18c.2 0 .35.06.47.18s.18.28.18.47c0 .19-.06.34-.18.46L8.93 8l3.27 3.27c.12.12.18.27.18.46 0 .2-.06.35-.18.47a.63.63 0 0 1-.47.18.63.63 0 0 1-.46-.18L8 8.93Z"
      />
    </svg>
  );
};

export const CrossIcon = React.memo(CrossIconComponent);
