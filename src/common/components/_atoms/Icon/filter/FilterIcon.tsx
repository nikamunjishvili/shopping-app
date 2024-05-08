import { IconProps } from "../../../../types";

const FilterIcon = ({ className, width, height, onClick }: IconProps) => {
  return (
    <div onClick={onClick} className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 5H9"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 14H4"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="5" cy="5" r="4" stroke="white" stroke-width="1.5" />
        <circle cx="17" cy="14" r="4" stroke="white" stroke-width="1.5" />
      </svg>
    </div>
  );
};

export default FilterIcon;
