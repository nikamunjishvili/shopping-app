import { IconProps } from "../../../types";

const FacebookIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#00B307" />
      <g clip-path="url(#clip0_2638_1137)">
        <path
          d="M22.9981 13.9887H24.6414V11.1267C24.3579 11.0878 23.3829 11 22.2474 11C19.8781 11 18.2551 12.4902 18.2551 15.2292V17.75H15.6406V20.9495H18.2551V29H21.4606V20.9503H23.9694L24.3676 17.7508H21.4599V15.5465C21.4606 14.6217 21.7096 13.9887 22.9981 13.9887Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2638_1137">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(11 11)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
