import React, { useState } from "react";
import Dashboard from "./layouts/Dashboard";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./admin/AdminPanel";
import List from "./admin/List";
import New from "./admin/New";
import Single from "./admin/Single";
import SignAdmin from "./admin/SignAdmin";
import List2 from "./admin/List2";
import SignInAdmin from "./admin/SignInAdmin";
function App() {
  const [admin, setAdmin] = useState(null);

  return (
    <div>
      <Routes>
          <Route
            exact
            path="/admin"
            element={<AdminPanel admin={admin} setAdmin={setAdmin}></AdminPanel>}
          ></Route>
          <Route exact path="/admin/users" element={<List></List>}></Route>
          <Route exact path="/admin/users/new" element={<New></New>}></Route>
          <Route
            exact
            path="/admin/users/:userId"
            element={<Single></Single>}
          ></Route>
          <Route
            exact
            path="/admin/signup"
            element={<SignAdmin></SignAdmin>}
          ></Route>
          <Route exact path="/admin/messages" element={<List2></List2>}></Route>
          <Route path="*" element={<Dashboard></Dashboard>}></Route>
          <Route
            exact
            path="/admin/signin"
            element={<SignInAdmin setAdmin={setAdmin}></SignInAdmin>}
          ></Route>
        </Routes>
        
    </div>
  );
}

export default App;
