import { IconProps } from "./types";

export const LogoutIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "16"}
      height={height ?? "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 8.0013H4M4 8.0013L5.33333 9.33464M4 8.0013L5.33333 6.66797"
        stroke={color ?? "#FF0000"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 14.656C6.96467 14.6247 6.34667 14.5093 5.91933 14.0813C5.40667 13.5693 5.34267 12.784 5.33467 11.334M10.6667 14.666C12.1167 14.658 12.902 14.594 13.414 14.0813C14 13.496 14 12.5527 14 10.6673V5.33398C14 3.44865 14 2.50532 13.414 1.91998C12.8287 1.33398 11.8853 1.33398 10 1.33398H9.33333C7.448 1.33398 6.50467 1.33398 5.91933 1.91998C5.40667 2.43198 5.34267 3.21732 5.33467 4.66732M2 6.33398V9.66732C2 11.2387 2 12.024 2.488 12.5127C2.976 13.0007 3.762 13.0007 5.33333 13.0007M2.488 3.48865C2.976 3.00065 3.762 3.00065 5.33333 3.00065"
        stroke={color ?? "#FF0000"}
        stroke-linecap="round"
      />
    </svg>
  );
};