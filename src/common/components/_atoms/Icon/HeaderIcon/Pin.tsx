import { IconProps } from "../../../../types";

const PinIcon = ({width, height}: IconProps) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z"
          stroke="#B3B3B3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.5 10.8183C9.88071 10.8183 11 9.71933 11 8.36373C11 7.00812 9.88071 5.90918 8.5 5.90918C7.11929 5.90918 6 7.00812 6 8.36373C6 9.71933 7.11929 10.8183 8.5 10.8183Z"
          stroke="#B3B3B3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
}

export default PinIcon