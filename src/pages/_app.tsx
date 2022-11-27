import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps<{ session: Session }>) {
	return (
		<>
			<Head>
				<title>boobar.eth</title>
				<meta name="description" content="boobar.eth" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThirdwebProvider desiredChainId={ChainId.Mumbai}>
				<SessionProvider session={pageProps.session}>
					<Component {...pageProps} />
				</SessionProvider>
			</ThirdwebProvider>
		</>
	);
}
