import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps<{ session: Session }>) {
	return (
		<ThirdwebProvider desiredChainId={ChainId.Mumbai}>
			<SessionProvider session={pageProps.session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ThirdwebProvider>
	);
}
