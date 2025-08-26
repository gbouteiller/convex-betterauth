import { getToken } from "@convex-dev/better-auth/nextjs";
import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { createAuth } from "@/lib/auth";
import { SignOut } from "./sign-out";
import { UserEmail } from "./user-email";

// ROOT ************************************************************************************************************************************
export default async function AdminPage() {
	const token = await getToken(createAuth);
	const preloaded = await preloadQuery(api.auth.getUserEmail, {}, { token });

	return (
		<div className="flex flex-col gap-2">
			<UserEmail preloaded={preloaded} />
			<SignOut />
		</div>
	);
}
