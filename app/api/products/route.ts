import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
	try {
		const products = await prisma.product.findMany({ include: { transactions: true } });
		return NextResponse.json(products);
	} catch (error) {
		console.error("Error fetching products:", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}
