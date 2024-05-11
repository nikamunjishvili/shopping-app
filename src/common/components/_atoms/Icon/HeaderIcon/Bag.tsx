import { IconProps } from "../../../../types";

const BagIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33333 10.6667H4.08333L1.25 26.25H26.75L23.9167 10.6667H19.6667M8.33333 10.6667V6.41667C8.33333 3.28705 10.8704 0.75 14 0.75V0.75C17.1296 0.75 19.6667 3.28705 19.6667 6.41667V10.6667M8.33333 10.6667H19.6667M8.33333 10.6667V14.9167M19.6667 10.6667V14.9167"
        stroke="#1A1A1A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BagIcon;
