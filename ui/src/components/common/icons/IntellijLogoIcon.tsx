import React from "react";
import { useIconProps } from "./hooks";
import { IconProps } from "./types";

const IntellijLogoIconComponent = (props: IconProps) => {
  const { size } = useIconProps(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#intellij-logo-clip-1)">
        <path
          fill="url(#intellij-logo-grad-1)"
          d="M3.16625 14.1062L0.224609 11.7833L1.95586 8.57709L4.55797 9.44787L3.16625 14.1062Z"
        />
        <path
          fill="#087CFA"
          d="M19.9996 5.33124L19.6393 16.9146L11.935 20L7.73926 17.2916L19.9996 5.33124Z"
        />
        <path
          fill="url(#intellij-logo-grad-2)"
          d="M20.0004 5.33123L16.1879 9.04998L11.292 3.04373L13.7087 0.327087L20.0004 5.33123Z"
        />
        <path
          fill="url(#intellij-logo-grad-3)"
          d="M7.73961 17.2916L1.6125 19.5063L2.89586 15.0125L4.55836 9.44789L0 7.92289L2.89586 0L9.44164 0.772891L16.1875 9.05L7.73961 17.2916Z"
        />
        <path fill="#000" d="M3.83984 3.75H16.3398V16.25H3.83984V3.75Z" />
        <path
          fill="#fff"
          d="M5.39746 13.8875H10.085V14.6687H5.39746V13.8875ZM7.73707 6.17086V5.31664H5.40582V6.17086H6.05996V9.12086H5.40582V9.975H7.73707V9.12086H7.08496V6.17086H7.73707ZM9.95793 10.0334L9.97246 10.0416C9.65479 10.0519 9.33982 9.98019 9.05793 9.83336C8.82635 9.70867 8.62005 9.54192 8.44957 9.34164L9.09332 8.62289C9.21092 8.75562 9.34703 8.87071 9.49746 8.96461C9.6319 9.04794 9.78727 9.0913 9.94543 9.08961C10.03 9.09368 10.1145 9.07961 10.1932 9.04835C10.2719 9.01709 10.343 8.96936 10.4017 8.90836C10.5272 8.73867 10.5864 8.52902 10.5683 8.31875V5.3125H11.61V8.36461C11.6146 8.61179 11.5759 8.85787 11.4954 9.09164C11.4269 9.28598 11.3149 9.46209 11.168 9.60652C11.021 9.75096 10.843 9.85989 10.6475 9.925C10.4255 10.0002 10.1923 10.0368 9.95793 10.0334Z"
        />
      </g>
      <defs>
        <linearGradient
          id="intellij-logo-grad-1"
          x1="160.7"
          x2="773.1"
          y1="290.7"
          y2="259.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".1" stopColor="#FC801D" />
          <stop offset=".2" stopColor="#B07F61" />
          <stop offset=".4" stopColor="#577DB3" />
          <stop offset=".5" stopColor="#1E7CE6" />
          <stop offset=".6" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient
          id="intellij-logo-grad-2"
          x1="651.9"
          x2="320.1"
          y1="1001.4"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FE2857" />
          <stop offset=".1" stopColor="#CB3979" />
          <stop offset=".2" stopColor="#9E4997" />
          <stop offset=".3" stopColor="#7557B2" />
          <stop offset=".3" stopColor="#5362C8" />
          <stop offset=".4" stopColor="#386CDA" />
          <stop offset=".5" stopColor="#2373E8" />
          <stop offset=".7" stopColor="#1478F2" />
          <stop offset=".8" stopColor="#0B7BF8" />
          <stop offset="1" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient
          id="intellij-logo-grad-3"
          x1="462.2"
          x2="1609.5"
          y1="460.6"
          y2="2358.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FE2857" />
          <stop offset=".1" stopColor="#FE295F" />
          <stop offset=".2" stopColor="#FF2D76" />
          <stop offset=".3" stopColor="#FF318C" />
          <stop offset=".4" stopColor="#EA3896" />
          <stop offset=".6" stopColor="#B248AE" />
          <stop offset=".8" stopColor="#5A63D6" />
          <stop offset="1" stopColor="#087CFA" />
        </linearGradient>
        <clipPath id="intellij-logo-clip-1">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IntellijLogoIcon = React.memo(IntellijLogoIconComponent);
