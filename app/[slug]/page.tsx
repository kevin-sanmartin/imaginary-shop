"use client";
import { IProduct } from "@/types/Product";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import classes from "./classes.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();
	const { slug } = useParams();
	const { product } = useProduct(slug as string);

	const backToHome = useCallback(() => {
		router.push("/");
	}, [router]);

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<div className={classes.root}>
			<div className={classes.productContainer}>
				<Image src={`/${product.imageUrl}`} alt={product.name} fill className={classes.background} quality={100} />
				<Image src={`/${product.imageUrl}`} alt={product.name} width={500} height={500} className={classes.image} quality={100} />

				<div className={classes.content}>
					<div className={classes.titleContainer}>
						<h2 className={classes.title}>{product.name}</h2>
						<p className={classes.description}>{product.description}</p>
					</div>
					<div className={classes.buttonContainer}>
						<button className={classes.button}>Acheter maintenant</button>
						<button onClick={backToHome} className={classes.button}>
							Retour à l'accueil
						</button>
					</div>
				</div>
			</div>

			<div className={classes.commentContainer}>
				{product.fakeComments.map((comment) => (
					<div key={comment.id} className={classes.comment}>
						<p className={classes.commentText}>{comment.comment}</p>

						<div className={classes.info}>
							<p className={classes.commentAuthor}>{comment.name}</p>
							<div className={classes.stars}>
								{Array.from({ length: comment.stars }, (_, index) => (
									<Image key={index} src="/assets/star.svg" alt="star" width={20} height={20} quality={100} />
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

const useProduct = (slug: string) => {
	const [product, setProduct] = useState<IProduct | null>(null);

	const fetchProduct = useCallback(async () => {
		try {
			const res = await fetch(`/api/products/${slug}`);
			if (!res.ok) {
				throw new Error("Failed to fetch product");
			}
			const data = await res.json();
			setProduct(data);
		} catch (err) {
			console.error("Failed to fetch product", err);
		}
	}, [slug]);

	useEffect(() => {
		fetchProduct();
	}, [fetchProduct]);

	return { product };
};
