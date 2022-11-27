import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import { FC, useState } from "react";
import { HambugerMenu } from "./HamburgerMenu";
import { DrawerNav } from "./nav/DrawerNav";
import { NavItemsList } from "./nav/NavItemsList";
import logo from "@/assets/logo.svg";

export const Header: FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header className="shadow-sm">
			<div className="container mx-auto px-2 py-4 flex flex-row">
				<div className="flex items-center flex-grow">
					<HambugerMenu open={menuOpen} setOpen={setMenuOpen} />
					<DrawerNav isOpen={menuOpen} close={() => setMenuOpen(false)} />
					<div className="items-center hidden md:flex">
						<div className="mr-2">
							<Image src={logo} alt="logo" width={32} height={32} />
						</div>
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
