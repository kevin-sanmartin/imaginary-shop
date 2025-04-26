import { PrismaClient } from "@prisma/client";
import { products } from "../../products.ts";

const prisma = new PrismaClient();

async function main() {
	await prisma.product.deleteMany();
	await prisma.fakeComment.deleteMany();

	for (const product of products) {
		const createdProduct = await prisma.product.create({
			data: {
				name: product.name,
				description: product.description,
				price: product.price,
				imageUrl: product.imageUrl,
				slug: product.slug,
			},
		});

		if (product.fakeComments?.length) {
			await prisma.fakeComment.createMany({
				data: product.fakeComments.map((comment) => ({
					productId: createdProduct.id,
					name: comment.name,
					comment: comment.comment,
					stars: comment.stars,
				})),
			});
		}
	}

	console.log("Seeding completed successfully.");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
