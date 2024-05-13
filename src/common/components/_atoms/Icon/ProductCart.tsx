const ProductCart = ({ stroke }: ProductCartType) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:fill-[#00B207]"
    >
      <path
        d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333"
        stroke={stroke}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="hover:stroke-[#fff]"
      />
    </svg>
  );
};

export default ProductCart;

interface ProductCartType {
  stroke: string;
}
