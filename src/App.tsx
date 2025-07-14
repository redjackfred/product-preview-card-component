import "./App.css";
import ProductPreviewCard from "./ProductPreviewCard";

function App() {
	const product = {
		title: "Gabrielle Essence Eau De Parfum",
		description:
			"A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
		category: "Perfume",
		price: 149.99,
		originalPrice: 169.99,
	};
	return (
		<div className="flex h-screen w-full items-center justify-center bg-cream">
			<ProductPreviewCard product={product} />
		</div>
	);
}

export default App;
