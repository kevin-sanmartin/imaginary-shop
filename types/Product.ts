import { IFakeComment } from "./FakeComments";

export type IProduct = {
	id: string;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	slug: string;
	fakeComments: IFakeComment[];
};
