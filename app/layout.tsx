import type { Metadata } from "next";
import { Roboto, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header";
import { PropsWithChildren } from "react";
import classes from "./layout.module.scss";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto",
});

const cinzel = Cinzel({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-cinzel",
});

export const metadata: Metadata = {
	title: "La boutique de l'imaginaire",
	description: "La boutique de l'imaginaire",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} ${cinzel.variable}`}>
				<div className={classes.background} />
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
