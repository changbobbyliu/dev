import { FC } from "react";
import { NavItemsList } from "./NavItemsList";

export const DrawerNav: FC<{ isOpen: boolean; close: () => void }> = ({ isOpen, close }) => {
	return (
		<div
			className={`flex fixed top-0 bottom-0 left-0 right-0 z-40 duration-100 bg-black transition-colors ${
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
				<NavItemsList callback={close} />
			</ul>
		</div>
	);
};
