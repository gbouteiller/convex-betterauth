"use client";

import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function SignOut() {
	const { isAuthenticated } = useConvexAuth();
	const router = useRouter();
	return (
		<>
			{isAuthenticated && (
				<Button
					variant="secondary"
					className="cursor-pointer"
					onClick={() => void authClient.signOut({}, { onSuccess: () => router.push("/") })}
				>
					Sign out
				</Button>
			)}
		</>
	);
}
