import React from "react";
import Navbar from '../Nav/Navbar'
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <Navbar>
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </Navbar>
    </div>
  );
};

export default DashBoard;
