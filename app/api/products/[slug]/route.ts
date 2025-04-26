import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Params = Promise<{ slug: string }>;

export async function GET(request: Request, segmentData: { params: Params }) {
	try {
		const params = await segmentData.params;
		const product = await prisma.product.findUniqueOrThrow({ where: { slug: params.slug }, include: { fakeComments: true } });
		return NextResponse.json(product);
	} catch (error) {
		console.error("Error fetching product:", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}
