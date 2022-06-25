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
import List3 from "./admin/List3";
import List4 from "./admin/List4";

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
          <Route exact path="/admin/users" element={<List admin={admin} setAdmin={setAdmin}></List>}></Route>
          <Route exact path="/admin/users/new" element={<New admin={admin} setAdmin={setAdmin}></New>}></Route>
          <Route
            exact
            path="/admin/users/:userId"
            element={<Single admin={admin} setAdmin={setAdmin}></Single>}
          ></Route>
          <Route
            exact
            path="/admin/signup"
            element={<SignAdmin admin={admin} setAdmin={setAdmin}></SignAdmin>}
          ></Route>
          <Route exact path="/admin/messages" element={<List2 admin={admin} setAdmin={setAdmin}></List2>}></Route>
          <Route exact path="/admin/vinegradtestresults" element={<List3 admin={admin} setAdmin={setAdmin}></List3>}></Route>
          
          <Route
            exact
            path="/admin/signin"
            element={<SignInAdmin setAdmin={setAdmin}></SignInAdmin>}
          ></Route>
          <Route path="/admin/userpasswords" element={<List4 admin={admin} setAdmin={setAdmin}></List4>}></Route>
          <Route path="*" element={<Dashboard></Dashboard>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
