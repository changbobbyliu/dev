import { FC } from "react";
import { NavItemsList, TNavSection } from "./NavItemsList";

export const DrawerNav: FC<{ activeSection: TNavSection; isOpen: boolean; close: () => void }> = ({
	activeSection,
	isOpen,
	close,
}) => {
	return (
		<div
			className={`flex fixed top-0 left-0 w-screen h-screen z-40 duration-100 bg-black transition-colors ${
				isOpen ? "bg-[#00000090]" : "delay-100 bg-transparent pointer-events-none"
			} md:hidden`}
			onClick={close}
		>
			<ul
				className={`min-w-[300px] bg-white pt-20 duration-100 uppercase flex flex-col ${
					isOpen ? "translate-x-0" : "delay-100 -translate-x-full"
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				<NavItemsList callback={close} activeSection={activeSection} />
			</ul>
		</div>
	);
};
