import CartIcon from "./assets/images/icon-cart.svg";
import PerfumeImage from "./assets/images/image-product-mobile.jpg";
import PerfumeImageDesktop from "./assets/images/image-product-desktop.jpg";

export default function ProductPreviewCard() {
	return (
		<article className="w-[350px] rounded-lg bg-white md:flex md:w-fit md:flex-row">
			<img src={PerfumeImage} className="rounded-t-lg md:hidden" />
			<img
				src={PerfumeImageDesktop}
				className="hidden rounded-l-lg md:block md:w-[300px]"
			/>
			<div className="flex flex-col gap-6 p-8 md:w-[300px]">
				<section className="flex flex-col gap-6">
					<p className="text-preset-4 text-grey">PERFUME</p>
					<h1 className="text-preset-1 text-black">
						Gabrielle Essence Eau De Parfum
					</h1>
					<p className="text-preset-3 text-grey">
						A floral, solar and voluptuous interpretation composed by Olivier
						Polge, Perfumer-Creator for the House of CHANEL.
					</p>
				</section>
				<div className="">
					<span className="text-preset-1 mr-4 text-green-500">$149.99</span>
					<span className="text-preset-5 text-grey line-through">$169.99</span>
				</div>
				<button className="text-preset-2 w-full rounded-lg bg-green-500 px-8 py-4 text-white duration-500 hover:bg-green-700">
					<img
						src={CartIcon}
						alt="Cart Icon"
						className="mr-2 inline h-[18px] w-[18px]"
					/>
					Add to Cart
				</button>
			</div>
		</article>
	);
}
