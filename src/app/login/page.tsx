import React from "react";
import Login from "../../components/LoginPage";

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#090635]">
      <div className="z-10 max-w-lg items-center justify-between font-mono text-sm lg:flex">
        <Login />
      </div>
    </main>
  );
}

export default page;
