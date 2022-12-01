import ethereumSVG from "@/assets/ethereum.svg";

import { Button, Card } from "@/ui/components";
import { DiscordLoginButton } from "@/ui/widgets/auth/DiscordLoginButton";
import { NextPage } from "next";
import { Header } from "@/ui/widgets/header/Header";

const Home: NextPage<{ aa: string }, { xx: string }> = () => {
	return (
		<>
			<Header />
			<main className="container mx-auto px-2">
				{/* TODO: create Section component and use TNavSection as id */}
				<div id="home" className="h-screen pt-16 bg-fuchsia-300">
					<span>Home</span>
				</div>

				<div id="portfolio" className="h-screen pt-16 bg-lime-300">
					<span>Portfolio</span>
				</div>

				<div id="hobby" className="h-screen pt-16 bg-rose-300">
					<span>HOBBY</span>
				</div>

				<div className="py-4">
					<Card title="ChitChat" subtitle="You have a new message!" leftIcon={ethereumSVG} />
				</div>
				<h1 className="font-bold uppercase text-gray-800 text-lg">Test CTA</h1>
				<div className="flex py-2 space-x-2">
					<Button title="Click me!" action={() => alert("Clicked!")} />
					<DiscordLoginButton />
				</div>
			</main>
		</>
	);
};

export default Home;
