import React, { useEffect, useState } from "react";
import "./scss/Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { fetchUsersAndPasswords } from "../api/axios";

const columns = [
  { field: "username", headerName: "Kullanıcı Adı", width: 150 },
  { field: "password", headerName: "Şifre", width: 150 }
];

let rows = [];

const UserPasswords = () => {
  const [data, setData] = useState(rows);

  useEffect(() => {
    fetchUsersAndPasswords()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Kayıt Olan Kullanıcılar
        <Link
          to="/admin/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Kullanıcı Ekle
        </Link>
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          getRowId={(data) => data._id}
          className="datagrid"
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserPasswords;
