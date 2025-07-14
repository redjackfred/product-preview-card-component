import CartIcon from "./assets/images/icon-cart.svg";

export default function Button({ text }: { text?: string }) {
	return (
		<button className="text-preset-2 w-full rounded-lg bg-green-500 px-8 py-4 text-white duration-500 hover:bg-green-700">
			<img
				src={CartIcon}
				alt="Cart Icon"
				className="mr-2 inline h-[18px] w-[18px]"
			/>
			{text || "Add to Cart"}
		</button>
	);
}
