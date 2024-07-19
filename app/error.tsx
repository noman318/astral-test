"use client";
import ErrorMessage from "@/components/ErrorMessage";
import React from "react";

const Error: React.FC = () => {
  return (
    <div>
      <h1>Error</h1>
      <ErrorMessage message="Something went wrong!" />
    </div>
  );
};

export default Error;
