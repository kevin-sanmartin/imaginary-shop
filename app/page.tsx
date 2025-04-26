"use client";
import { IProduct } from "@/types/Product";
import { useCallback, useEffect, useState } from "react";
import classes from "./classes.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
	const { products } = useProducts();
	const router = useRouter();

	const items: string[] = [
		"⚡ Barbara G. a envoyé un coup de foudre à Nicolas P. ! Attention aux papillons dans le ventre !",
		"💬 Lucas V. a discrètement saupoudré Clara D. d'une belle pincée de gêne... Quelle ambiance !",
		"✨ Samuel T. a offert à Élodie R. une étincelle d'idée oubliée... Cette fois, elle ne s'échappera pas !",
		"😂 Manon B. envoie à Julien M. un éclat de rire de bébé... Fous rires garantis !",
		"🎟️ Hugo F. a envoyé Camille S. directement dans la file d'attente éternelle. Courage !",
		"🌟 Antoine L. a confié à Laura K. un pot rempli de doux rêves oubliés...",
		"🤐 Zoé A. offre à Maxime D. 10 précieuses secondes de silence. Profitez-en !",
		"🎨 Thomas B. a offert à Léa P. un monde qui fond et se déforme. Bon voyage visuel !",
		"🙊 Pauline S. a légué à Baptiste N. un souvenir verbal gênant... et inoubliable.",
	];

	return (
		<div className={classes.root}>
			<div className={classes.hero}>
				<div className={classes.titleContainer}>
					<h2 className={classes.title}>L'imaginaire à portée de main</h2>
					<p className={classes.subtitle}>
						Bienvenue dans un espace où l'imagination prend forme. Ici, vous ne trouverez rien d'utile, mais tout ce qui peut émerveiller. Des objets absurdes, magiques
						ou tendrement inutiles, à offrir ou à contempler.
					</p>
				</div>
				<Image src="/assets/hero-image.png" alt="Hero Image" width={884} height={500} quality={100} className={classes.heroImage} priority />
			</div>

			<div className={classes.scrollingBanner}>
				<div className={classes.content}>
					{items.map((item, index) => (
						<span key={index} className={classes.item}>
							{item}
						</span>
					))}
				</div>
			</div>

			<div className={classes.productsContainer}>
				{products.map((product) => (
					<div key={product.id} className={classes.productCard} onClick={() => router.push(`/${product.slug}`)}>
						<div className={classes.imageContainer}>
							<Image src={`/${product.imageUrl}`} alt={product.name} width={600} height={600} className={classes.image} quality={100} />
						</div>
						<div className={classes.text}>
							<h3 className={classes.productName}>{product.name}</h3>
							<p className={classes.productPrice}>{product.price}.00€</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

const useProducts = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	const fetchProducts = useCallback(async () => {
		try {
			const res = await fetch("/api/products");
			const data = await res.json();
			console.log("Fetched products:", data);
			// Random sort the products
			data.sort(() => Math.random() - 0.5);
			setProducts(data);
		} catch (err) {
			console.error("Failed to fetch products", err);
		}
	}, []);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return { products };
};
