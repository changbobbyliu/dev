import Head from "next/head";
import ethereumSVG from "@/assets/ethereum.svg";

import { Button, Card } from "@/ui/components";
import { DiscordLoginButton } from "@/ui/widgets/auth/DiscordLoginButton";
import { NextPage } from "next";
import { Header } from "@/ui/widgets/header/Header";

const Home: NextPage<{ aa: string }, { xx: string }> = () => {
	return (
		<>
			<Head>
				<title>boobar.eth</title>
				<meta name="description" content="boobar.eth" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="container mx-auto px-2">
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
