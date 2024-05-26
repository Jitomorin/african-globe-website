"use client";

import CheckOffLoansTab from "@/components/check-off-loan-tabs";
import FAQ from "@/components/faq";
import React from "react";

const stats = [
  { label: "Founded", value: "2008" },
  { label: "Countries", value: "3" },
  { label: "Employees", value: "30" },
];

const Faq = () => {
  return (
    <main className="flex justify-center align-middle items-center min-w-screen my-10">
      <div className="flex  mx-auto">
        <FAQ />
      </div>
    </main>
  );
};

export default Faq;
