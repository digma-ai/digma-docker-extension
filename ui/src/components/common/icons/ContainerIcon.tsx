import React from "react";
import { useIconProps } from "./hooks";
import { IconProps } from "./types";

const ContainerIconComponent = (props: IconProps) => {
  const { size, color } = useIconProps(props);

  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
    >
      <mask
        id="container-mask-1"
        width="18"
        height="17"
        x="3"
        y="4"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M3 15V8h1l8-4 8 4h1v7a1 1 0 0 1-1 1l-8 4-8-4a1 1 0 0 1-1-1Zm16-6 1 1v5l-1 1V9Zm-1 1h-1v6h1v-6Zm-3 1h1v6h-1v-6Zm-1 1h-1v6h1v-6Z"
          clipRule="evenodd"
        />
      </mask>
      <g mask="url(#container-mask-1)">
        <path fill={color} d="M0 0h24v24H0z" />
      </g>
    </svg>
  );
};

export const ContainerIcon = React.memo(ContainerIconComponent);
