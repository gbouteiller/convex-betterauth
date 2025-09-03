"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function SignOut() {
	const router = useRouter();
	const handleClick = () => authClient.signOut({}, { onSuccess: () => router.push("/") });

	return (
		<Button variant="secondary" className="cursor-pointer" onClick={handleClick}>
			Sign out
		</Button>
	);
}
