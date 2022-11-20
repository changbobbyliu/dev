import Head from "next/head";
import ethereumSVG from "@/assets/ethereum.svg";

import { Button, Text, Card } from "@/ui/components";

export default function Home() {
	return (
		<>
			<Head>
				<title>boobar.eth</title>
				<meta name="description" content="boobar.eth" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="container mx-auto">
				<Text>boobar.eth</Text>
				<div className="py-4">
					<Card title="ChitChat" subtitle="You have a new message!" leftIcon={ethereumSVG} />
				</div>
				<h1 className="font-bold uppercase text-gray-800 text-lg">Test CTA</h1>
				<div className="flex py-2 space-x-2">
					<Button title="Click me!" action={() => alert("Clicked!")} containerClassName="bg-" />
					<Button title="Click me!" action={() => alert("Clicked!")} />
				</div>
			</main>
		</>
	);
}
