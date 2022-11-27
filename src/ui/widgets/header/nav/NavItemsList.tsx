import { FC } from "react";
import styles from "../Header.module.css";

export const NavItemsList: FC = () => {
	return (
		<>
			<li className={`${styles.menuitem}`}>Home 1</li>
			<li className={`${styles.menuitem}`}>Home 2</li>
			<li className={`${styles.menuitem} ${styles.active}`}>Home 3</li>
			<li className={`${styles.menuitem}`}>Home 4</li>
		</>
	);
};
