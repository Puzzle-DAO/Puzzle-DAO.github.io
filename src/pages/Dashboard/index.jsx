import React from "react";

export const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-8 h-full">
      <div className="mb-[120px]">
        <h1 className="text-white font-bold text-[80px]">Coming Soon</h1>
      </div>
      <div className="">
        <a
          href="https://puzzlemakerdao.gitbook.io/whitepaper/"
          target="_blank"
          rel="noreferrer"
          className="app-button uppercase text-2xl px-4 py-2 rounded-sm"
        >
          Read Whitepaper
        </a>
      </div>
    </div>
  );
};
