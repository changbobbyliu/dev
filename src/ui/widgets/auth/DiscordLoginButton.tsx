import { FC, useMemo } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/ui/components";

export const DiscordLoginButton: FC = () => {
	const { data: session, status } = useSession();

	const { title, action }: { title: string; action?: () => void } = useMemo(() => {
		console.log("status", status, session);
		if (status === "loading") return { title: "Loading...", action: undefined };
		if (status === "authenticated") return { title: "Logout", action: signOut };

		return { title: "Login", action: signIn };
	}, [status, session]);

	return <Button title={title} action={action} />;
};
