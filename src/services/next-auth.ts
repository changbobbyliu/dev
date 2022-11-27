import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { prisma } from "./prisma";

export const nextAuthOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		// Callback: http://localhost:3000/api/auth/callback/discord
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
		}),
	],
	// callbacks: {
	// 	async jwt({ token, account }) {
	// 		if (account) {
	// 			// make `accessToken` availalbe in session callback
	// 			token.accessToken = account.access_token;
	// 		}
	// 		return token;
	// 	},
	// 	async session({ session, token }) {
	// 		session.user.accessToken = token.accessToken;
	// 		return session;
	// 	},
	// },
	theme: {
		logo: "/logo-full.png",
		colorScheme: "light",
	},
};
