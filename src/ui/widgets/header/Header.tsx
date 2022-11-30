import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import { FC, useRef, useState } from "react";
import { HambugerMenu } from "./HamburgerMenu";
import { DrawerNav } from "./nav/DrawerNav";
import { NavItemsList } from "./nav/NavItemsList";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { hooks } from "@/managers/NavManager";

export const Header: FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const headerRef = useRef<HTMLElement>(null);

	hooks.useHideHeaderOnScroll(headerRef);

	return (
		<header
			ref={headerRef}
			className="shadow-sm fixed w-full bg-white transition-transform duration-200"
		>
			<div className="container mx-auto px-2 flex flex-row h-16 items-center">
				<div className="flex items-center flex-grow">
					<HambugerMenu open={menuOpen} setOpen={setMenuOpen} />
					<DrawerNav isOpen={menuOpen} close={() => setMenuOpen(false)} />
					<div className="items-center hidden md:flex">
						<Link href={"#home"} className="mr-6">
							<Image src={logo} alt="logo" width={32} height={32} />
						</Link>
						<ul className="flex space-x-1">
							<NavItemsList />
						</ul>
					</div>
				</div>
				<ConnectWallet accentColor="rgb(30 41 59)" />
			</div>
		</header>
	);
};
