"use client";
import { useCallback } from "react";
import classes from "./classes.module.scss";
import { useRouter } from "next/navigation";

export default function Header() {
	const router = useRouter();

	const goToHome = useCallback(() => {
		router.push("/");
	}, [router]);

	return (
		<header className={classes["root"]}>
			<h1 className={classes["title"]} onClick={goToHome}>
				La boutique <span className={classes["inside-title"]}>de l'imaginaire</span>
			</h1>
		</header>
	);
}
