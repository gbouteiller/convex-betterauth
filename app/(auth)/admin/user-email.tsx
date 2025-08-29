"use client";

import { preloadedQueryResult } from "convex/nextjs";
import { type Preloaded, useConvexAuth, usePreloadedQuery } from "convex/react";
import { useEffect } from "react";
import type { api } from "@/convex/_generated/api";
import { authClient } from "@/lib/auth-client";

// ROOT ************************************************************************************************************************************
export function UserEmail({ preloaded }: UserEmailProps) {
	const { isPending } = authClient.useSession();
	const { isLoading } = useConvexAuth();
	const email = usePreloadedQuery(preloaded);

	useEffect(() => {
		console.log({ isLoading, isPending, email, preloaded: preloadedQueryResult(preloaded) });
	}, [isLoading, isPending, email, preloaded]);

	return <div>Email : {email}</div>;
}
type UserEmailProps = { preloaded: Preloaded<typeof api.auth.getUserEmail> };
