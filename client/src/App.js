import React from 'react'
import Dashboard from './layouts/Dashboard';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from './admin/AdminPanel';
import List from './admin/List';
import New from './admin/New';
import Single from './admin/Single';

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/admin" element={<AdminPanel></AdminPanel>}></Route>
        <Route exact path="/admin/users" element={<List></List>}></Route>
        <Route exact path='/admin/users/new' element={<New></New>}></Route>
        <Route exact path='/admin/users/:userId' element={<Single></Single>}></Route>
        <Route path='*' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
