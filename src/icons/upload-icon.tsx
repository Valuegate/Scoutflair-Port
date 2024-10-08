import { IconProps } from "./types";

export const UploadIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "16"}
      height={height ?? "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33366 10.666V5.23268L5.60033 6.96602L4.66699 5.99935L8.00033 2.66602L11.3337 5.99935L10.4003 6.96602L8.66699 5.23268V10.666H7.33366ZM4.00033 13.3327C3.63366 13.3327 3.31988 13.2022 3.05899 12.9413C2.7981 12.6805 2.66744 12.3665 2.66699 11.9993V9.99935H4.00033V11.9993H12.0003V9.99935H13.3337V11.9993C13.3337 12.366 13.2032 12.68 12.9423 12.9413C12.6814 13.2027 12.3674 13.3331 12.0003 13.3327H4.00033Z"
        fill={color ?? "#0B57B1"}
      />
    </svg>
  );
};
