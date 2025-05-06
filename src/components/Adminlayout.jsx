import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AdminLayout() {
  const isLoggedIn = localStorage.getItem("token"); // Or any auth check

  if (!isLoggedIn) {
    return (
      <div>
        <Header />
        <div className="text-center text-red-500 mt-10 text-lg font-semibold">
          This page doesn’t exist or you're not authorized.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-100 p-4 shadow-md">Admin sidebar</aside>
        <main className="flex-1 px-6 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
