import { FC, useMemo } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/ui/components";

export const DiscordLoginButton: FC = () => {
	const { data: session, status } = useSession();

	const action = useMemo(() => {
		if (status === "loading") return undefined;
		if (session) return signOut;
		return signIn;
	}, [status, session]);

	return <Button title={session ? "Logout" : "Login"} action={action} />;
};
