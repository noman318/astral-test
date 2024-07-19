import { useMemo } from "react";
import createApolloClient from "./apollo-client";

export default function useApollo() {
  const client = useMemo(() => createApolloClient(), []);
  return client;
}
