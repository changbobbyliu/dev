import { NavManager } from "@/managers/NavManager";
import { FC } from "react";
import styles from "../Header.module.css";

const navSections = ["home", "portfolio", "hobby"] as const;
export type TNavSection = typeof navSections[number];

type TNavItemProps = {
	section: TNavSection;
};

export const NavItemsList: FC<{ activeSection: TNavSection; callback?: () => void }> = ({
	activeSection,
	callback,
}) => {
	const NavItem: FC<TNavItemProps> = ({ section }) => {
		return (
			<li
				className={`${styles.menuitem} ${section === activeSection ? styles.active : ""}`}
				onClick={NavManager.smoothScrollTo(section, callback)!}
			>
				{section.toLocaleUpperCase()}
			</li>
		);
	};

	return (
		<>
			{navSections.map((section) => (
				<NavItem key={section} section={section} />
			))}
		</>
	);
};
