import { FC } from "react";
import styles from "../Header.module.css";

function smoothScrollTo(id: string, callback?: () => void) {
	return () => {
		const dom = document.getElementById(id);
		document.documentElement.scrollTo({
			top: dom?.offsetTop,
			behavior: "smooth",
		});
		callback?.();
	};
}

export const NavItemsList: FC<{ callback?: () => void }> = ({ callback }) => {
	return (
		<>
			<li
				className={`${styles.menuitem} ${styles.active}`}
				onClick={smoothScrollTo("home", callback)}
			>
				Home
			</li>
			<li className={`${styles.menuitem}`} onClick={smoothScrollTo("portfolio", callback)}>
				Portfolio
			</li>
			<li className={`${styles.menuitem}`} onClick={smoothScrollTo("hobby", callback)}>
				Hobby
			</li>
		</>
	);
};
