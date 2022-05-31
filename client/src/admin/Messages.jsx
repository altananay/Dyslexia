import React, { useEffect, useState } from "react";
import "./scss/Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { fetchMessages, fetchUsers } from "../api/axios";

const columns = [
  { field: "FirstName", headerName: "First name", width: 100 },
  { field: "LastName", headerName: "Last name", width: 100 },
  { field: "SendedAt", headerName: "Kayıt tarihi", width: 200 },
  { field: "Email", headerName: "Email", width: 200 },
  { field: "Description", headerName: "Email", width: 200 }
];

let rows = []


const Datatable = () => {

  const [data, setData] = useState(rows);
  

  useEffect(() => {
    fetchMessages().then(response => {
        console.log(response.data);
        setData(response.data)
    }).catch(error => {
        console.log(error);
    })
  }, [])

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/admin/users/1" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
  
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Gelen Kutusu
        <Link
          to="/admin/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Yeni Mesaj Gönder
        </Link>
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          getRowId={(data) => data._id}
          className="datagrid"
          rows={data}
          columns={columns.concat(actionColumn)}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
