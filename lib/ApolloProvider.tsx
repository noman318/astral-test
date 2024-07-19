"use client";

import createApolloClient from "@/lib/apollo-client";
import { ApolloProvider as BaseApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

export default function ApolloProvider({ children }: { children: ReactNode }) {
  return (
    <BaseApolloProvider client={createApolloClient()}>
      {children}
    </BaseApolloProvider>
  );
}
