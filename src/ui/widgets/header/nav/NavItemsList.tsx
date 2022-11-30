import { NavManager } from "@/managers/NavManager";
import { FC } from "react";
import styles from "../Header.module.css";

export const NavItemsList: FC<{ callback?: () => void }> = ({ callback }) => {
	return (
		<>
			<li
				className={`${styles.menuitem} ${styles.active}`}
				onClick={NavManager.smoothScrollTo("home", callback)!}
			>
				Home
			</li>
			<li
				className={`${styles.menuitem}`}
				onClick={NavManager.smoothScrollTo("portfolio", callback)!}
			>
				Portfolio
			</li>
			<li className={`${styles.menuitem}`} onClick={NavManager.smoothScrollTo("hobby", callback)!}>
				Hobby
			</li>
		</>
	);
};
