"use client";

import { HOMEPAGE_QUERY } from "@/query/homePageQuery";
import { useQuery } from "@apollo/client";
import Loader from "./Loader";

export default function HomePageContent() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY);
  console.log("data", data);
  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const homepageData = data.pages.nodes[0].homepage;

  return (
    <main>
      <h1>{homepageData.banners[0].bannersTitle}</h1>
    </main>
  );
}
