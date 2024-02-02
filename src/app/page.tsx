"use client"

import { 
  QueryClient,
  QueryClientProvider,
  // @ts-expect-error 
} from "@tanstack/react-query";
import AppRouter from "./AppRouter";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} >
        <AppRouter />
    </QueryClientProvider>
  );
}
