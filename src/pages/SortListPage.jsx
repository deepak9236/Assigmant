import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer"; 
import MobileNavbar from "../components/MobileNavbar";
import SortList from "../components/SortList";

import React from 'react'

const SortListPage = () => {
  return (
    <div>
      <MobileNavbar />
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1">
          <div className="relative flex">
            <SortList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SortListPage