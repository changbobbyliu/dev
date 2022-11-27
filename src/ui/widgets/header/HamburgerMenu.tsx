import { FC, Dispatch, SetStateAction } from "react";
import styles from "./Header.module.css";

export const HambugerMenu: FC<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }> = ({
	open,
	setOpen,
}) => {
	const upTransform = open ? "rotate-45" : "-translate-y-2";
	const middleTransform = open ? "rotate-45" : "";
	const downTransform = open ? "-rotate-45" : "translate-y-2";

	return (
		<div
			className="w-8 h-8 flex items-center justify-center cursor-pointer z-50 md:hidden"
			onClick={() => {
				setOpen((prev) => !prev);
			}}
		>
			<span className={`${styles.menubar} ${upTransform}`}></span>
			<span className={`${styles.menubar} ${middleTransform}`}></span>
			<span className={`${styles.menubar} ${downTransform}`}></span>
		</div>
	);
};
