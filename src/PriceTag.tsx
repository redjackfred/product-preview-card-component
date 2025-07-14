export default function PriceTag({
	price,
	orginalPrice,
}: {
	price: number;
	orginalPrice?: number;
}) {
	return (
		<div>
			<span className="text-preset-1 mr-4 text-green-500">${price}</span>
			{orginalPrice && (
				<span className="text-preset-5 text-grey line-through">
					${orginalPrice}
				</span>
			)}
		</div>
	);
}
