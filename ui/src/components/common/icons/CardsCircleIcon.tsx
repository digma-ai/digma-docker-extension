import { useTheme } from "@mui/material";
import React from "react";
import { useIconProps } from "./hooks";
import { IconProps } from "./types";

const CardsCircleIconComponent = (props: IconProps) => {
  const { size, color } = useIconProps(props);

  const theme = useTheme();
  const backgroundColor =
    theme.palette.mode === "light" ? "#e1e2e6" : "#333c42";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 103 97"
    >
      <circle cx="51" cy="48.5" r="48" fill={backgroundColor} />
      <g filter="url(#cards-circle-filter-1)">
        <rect width="80" height="27" x="18" y="19" fill={color} rx="4" />
      </g>
      <circle cx="25" cy="26" r="3" fill={backgroundColor} />
      <path stroke={backgroundColor} strokeLinecap="round" d="M31 26H93" />
      <g filter="url(#cards-circle-filter-2)">
        <rect width="80" height="27" x="11" y="36" fill={color} rx="4" />
      </g>
      <circle cx="18" cy="43" r="3" fill={backgroundColor} />
      <path stroke={backgroundColor} strokeLinecap="round" d="M24 43H86" />
      <g filter="url(#cards-circle-filter-3)">
        <rect width="80" height="27" x="3" y="55" fill={color} rx="4" />
      </g>
      <circle cx="10" cy="62" r="3" fill={backgroundColor} />
      <path stroke={backgroundColor} strokeLinecap="round" d="M16 62H78" />
      <defs>
        <filter
          id="cards-circle-filter-1"
          width="88"
          height="35"
          x="15"
          y="16"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_317_84694"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_317_84694"
            result="shape"
          />
        </filter>
        <filter
          id="cards-circle-filter-2"
          width="88"
          height="35"
          x="8"
          y="33"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_317_84694"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_317_84694"
            result="shape"
          />
        </filter>
        <filter
          id="cards-circle-filter-3"
          width="88"
          height="35"
          x="0"
          y="52"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_317_84694"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_317_84694"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const CardsCircleIcon = React.memo(CardsCircleIconComponent);
