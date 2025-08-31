"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function SignOut() {
	const router = useRouter();
	const handleClick = useCallback(() => void authClient.signOut({}, { onSuccess: () => router.push("/") }), [router]);

	return (
		<Button variant="secondary" className="cursor-pointer" onClick={handleClick}>
			Sign out
		</Button>
	);
}
