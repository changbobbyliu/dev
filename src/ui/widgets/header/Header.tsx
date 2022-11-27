import { ConnectWallet } from "@thirdweb-dev/react";
import { FC, useState } from "react";
import { HambugerMenu } from "./HamburgerMenu";
import { DrawerNav } from "./nav/DrawerNav";

export const Header: FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header className="shadow-sm">
			<div className="container mx-auto px-2 py-4 flex flex-row">
				<div className="flex items-center flex-grow">
					<HambugerMenu open={menuOpen} setOpen={setMenuOpen} />
					<DrawerNav isOpen={menuOpen} close={() => setMenuOpen(false)} />
				</div>
				<ConnectWallet />
			</div>
		</header>
	);
};
