import { IProduct } from "./Product";

export type IFakeComment = {
	id: string;
	name: string;
	comment: string;
	stars: number;
	product: IProduct;
};
