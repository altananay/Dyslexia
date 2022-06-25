import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import Hakkimizda from "../pages/Hakkimizda";
import Ekibimiz from "../pages/Ekibimiz";
import NotFound from "../pages/NotFound";
import Navi from "./Navi";
import Anasayfa from "../pages/Anasayfa";
import Iletisim from "../pages/Iletisim";
import Egitimler from "../pages/Egitimler";
import { ToastContainer } from "react-toastify";
import KayitOl from "../pages/KayitOl";
import VinegradBilgi from "../pages/VinegradBilgi";
import GirisYap from "../pages/GirisYap";
import Bar from "./Bar";
import "./index.css"
import Vinegrad from "../pages/Vinegrad";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setHide(true);
    }
  });

  window.onresize = function () {
    if (window.innerWidth < 800) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  return (
    <div>
      <ToastContainer position="bottom-right"></ToastContainer>
      {hide ? (
        <div>
          <Bar user={user} setUser={setUser}></Bar>
          <Grid>
            <Grid.Row>
              <Grid.Column>
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
                    path="/uygulamalar"
                    element={<Egitimler></Egitimler>}
                  ></Route>

                  <Route
                    exact
                    path="/iletisim"
                    element={<Iletisim></Iletisim>}
                  ></Route>
                  <Route exact path="/vinegrad" element={<Vinegrad></Vinegrad>}></Route>
                  <Route
                    exact
                    path="/kayitol"
                    element={<KayitOl></KayitOl>}
                  ></Route>
                  <Route
                    exact
                    path="/vinegradbilgi"
                    element={<VinegradBilgi></VinegradBilgi>}
                  ></Route>
                  <Route
                    exact
                    path="/girisyap"
                    element={<GirisYap setUser={setUser}></GirisYap>}
                  ></Route>
                  <Route path="*" element={<NotFound></NotFound>}></Route>
                </Routes>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      ) : (
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Navi user={user} setUser={setUser}></Navi>
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
                  path="/uygulamalar"
                  element={<Egitimler></Egitimler>}
                ></Route>

                <Route
                  exact
                  path="/iletisim"
                  element={<Iletisim></Iletisim>}
                ></Route>
                <Route exact path="/vinegrad" element={<Vinegrad></Vinegrad>}></Route>
                <Route
                  exact
                  path="/kayitol"
                  element={<KayitOl></KayitOl>}
                ></Route>
                <Route
                  exact
                  path="/vinegradbilgi"
                  element={<VinegradBilgi></VinegradBilgi>}
                ></Route>
                <Route
                  exact
                  path="/girisyap"
                  element={<GirisYap setUser={setUser}></GirisYap>}
                ></Route>

                <Route path="*" element={<NotFound></NotFound>}></Route>
              </Routes>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
      
    </div>
  );
}
