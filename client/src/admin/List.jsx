import React, {useEffect} from "react";
import "./scss/List.scss";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Datatable from "./Datatable";
import NotFound from "../pages/NotFound";

function List({ admin, setAdmin }) {
  useEffect(() => {
    if (localStorage.getItem("admin") && !admin) {
      setAdmin(JSON.parse(localStorage.getItem("admin")));
    }
  }, [admin]);

  return (
    <div>
      {admin ? (
        <div className="list2">
          <Sidebar></Sidebar>
          <div className="listContainer">
            <Navbar></Navbar>
            <Datatable></Datatable>
          </div>
        </div>
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  );
}

export default List;
