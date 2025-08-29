"use client";

import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { ConvexReactClient } from "convex/react";
import type { PropsWithChildren } from "react";
import { authClient } from "@/lib/auth-client";

if (!process.env.NEXT_PUBLIC_CONVEX_URL) throw new Error("Missing env var");
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL, { expectAuth: true, verbose: true });

export function Providers({ children }: PropsWithChildren) {
	return (
		<ConvexBetterAuthProvider client={convex} authClient={authClient}>
			{children}
		</ConvexBetterAuthProvider>
	);
}
