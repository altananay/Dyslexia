import React, { useEffect, useState } from "react";
import "./scss/Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";
import { fetchUsers } from "../api/axios";

const columns = [
  { field: "firstName", headerName: "First name", width: 100 },
  { field: "lastName", headerName: "Last name", width: 100 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 50,
  },
  { field: "username", headerName: "User name", width: 100 },
  { field: "grade", headerName: "Grade", width: 100 },
  { field: "signedAt", headerName: "Kayıt tarihi", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
];

let rows = [
  // { id: 1, lastName: "Anay", firstName: "Altan", age: 21 },
  // { id: 2, lastName: "Akmeşe", firstName: "Gamze Nur", age: 26 },
  // { id: 3, lastName: "Bayam", firstName: "Ayşe", age: 45 },
  // { id: 4, lastName: "Avcı", firstName: "Okab", age: 16 },
  // { id: 5, lastName: "Keçer", firstName: "Yusuf", age: null },
  // { id: 6, lastName: "Dirav", firstName: "Ahmet Suat", age: 150 },
  // { id: 7, lastName: "Atak", firstName: "Ferrara", age: 44 },
  // { id: 8, lastName: "Alişan", firstName: "Rossini", age: 36 },
];


const Datatable = () => {

  const [data, setData] = useState(rows);
  
  const handleDelete = (id) => {
    setData(data.filter(item=>item.id !== id));
  }

  useEffect(() => {
    fetchUsers().then(response => {
      setData(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error.response.data.message);
    })
  }, [])

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
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
        Add new User
        <Link
          to="/admin/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
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
