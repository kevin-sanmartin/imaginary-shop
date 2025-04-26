import { ETransactionType } from "@prisma/client";

export type ITransaction = {
	id: string;
	senderName: string;
	recipientName?: string;
	message: string;
	type: ETransactionType;
};
