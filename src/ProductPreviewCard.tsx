import PerfumeImage from "./assets/images/image-product-mobile.jpg";
import PerfumeImageDesktop from "./assets/images/image-product-desktop.jpg";
import Button from "./Button";
import PriceTag from "./PriceTag";

export default function ProductPreviewCard({
	product,
}: {
	product: {
		title: string;
		description: string;
		category: string;
		price: number;
		originalPrice?: number;
	};
}) {
	return (
		<article className="w-[350px] rounded-lg bg-white md:flex md:w-fit md:flex-row">
			<img src={PerfumeImage} className="rounded-t-lg md:hidden" />
			<img
				src={PerfumeImageDesktop}
				className="hidden rounded-l-lg md:block md:w-[300px]"
			/>
			<div className="flex flex-col gap-6 p-8 md:w-[300px]">
				<section className="flex flex-col gap-6">
					<p className="text-preset-4 text-grey">
						{product.category.toUpperCase()}
					</p>
					<h1 className="text-preset-1 text-black">
						{product.title
							.split(" ")
							.map(
								(word) =>
									word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
							)
							.join(" ")}
					</h1>
					<p className="text-preset-3 text-grey">{product.description}</p>
				</section>
				<PriceTag price={product.price} orginalPrice={product.originalPrice} />
				<Button text={"Add to Cart"} />
			</div>
		</article>
	);
}
