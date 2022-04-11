import React from "react";
import { Grid} from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import Hakkimizda from "../pages/Hakkimizda";
import Ekibimiz from "../pages/Ekibimiz";
import NotFound from "../pages/NotFound";
import Navi from "./Navi";
import Anasayfa from "../pages/Anasayfa";
import Iletisim from "../pages/Iletisim";
import Egitimler from "../pages/Egitimler"
import { ToastContainer } from "react-toastify";
import Test from "../pages/Test";
export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"></ToastContainer>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Navi></Navi>
            <Routes>
              <Route path="/" element={<Anasayfa></Anasayfa>}></Route>
              <Route
                exact
                path="/disleksihakkinda"
                element={<Hakkimizda></Hakkimizda>}
              ></Route>
              <Route
                exact
                path="/ekibimiz"
                element={<Ekibimiz></Ekibimiz>}
              ></Route>
              <Route
                exact
                path="/egitimler"
                element={<Egitimler></Egitimler>}
              ></Route>
              
              <Route exact path="/iletisim" element={<Iletisim></Iletisim>}></Route>
              <Route exact path="/test" element={<Test></Test>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
