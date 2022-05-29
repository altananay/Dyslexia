import React, { useEffect, useState } from "react";
import "./scss/Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { fetchVinegradTestResults } from "../api/axios";

const columns = [
  { field: "username", headerName: "Kullanıcı Adı", width: 100 },
  { field: "firstName", headerName: "Adı", width: 100 },
  { field: "lastName", headerName: "Soyadı", width: 80 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "age", headerName: "Yaş", width: 70 },
  { field: "gender", headerName: "Cinsiyet", width: 100 },
  { field: "grade", headerName: "Düzey", width: 100 },
  { field: "Result", headerName: "Sonuç", width: 100 },
  { field: "FinishedAt", headerName: "Tarih", width: 200 },
];

let rows = []


const Datatable = () => {

  const [data, setData] = useState(rows);
  

  useEffect(() => {
    fetchVinegradTestResults().then(response => {
        setData(response.data);
    }).catch(error => {
        console.log(error)
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
        Test Sonuçları
        <Link
          to="/admin/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          ...
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
