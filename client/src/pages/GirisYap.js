import React from "react";
import { Form, Formik } from "formik";
import { Container, Header, Button } from "semantic-ui-react";
import PTextInput from "../utilities/customFormControls/PTextInput";
import PPassword from "../utilities/customFormControls/PPassword";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../api/axios";

export default function GirisYap({setUser}) {

  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    passwordAgain: "",
  };

  const schema = Yup.object({
    username: Yup.string().required("kullanıcı adı zorunlu"),
    password: Yup.string()
      .required("şifre zorunlu"),
    passwordAgain: Yup.string()
      .oneOf([Yup.ref("password"), null], "Şifreler eşleşmeli")
      .required("Boş bırakılamaz."),
  });

  return (
    <div>
      <Container text textAlign="center">
        <Header as="h3" style={{ fontSize: "2em" }}>
          Giriş Yap
        </Header>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
              login(values).then((response) => {
                  localStorage.setItem("user", JSON.stringify(response.data.user))
                  setUser(response.data.user);
                  toast.success("Giriş başarılı. Anasayfaya yönlendiriliyorsunuz.")
                  navigate("/")
              }).catch(error => {
                  toast.warning(error.response.data.message)
              })
              resetForm({ values: "" });
          }}
        >
          <Form className="ui form">
            <PTextInput
              name="username"
              placeholder="Kullanıcı adını giriniz."
            ></PTextInput>
            <div style={{ marginTop: "15px" }}></div>
            <PPassword name="password" placeholder="Şifreyi Girin"></PPassword>
            <div style={{ marginTop: "15px" }}></div>
            <PPassword
              name="passwordAgain"
              placeholder="Şifreyi tekrar girin"
            ></PPassword>
            <Button color="green" type="submit" style={{ marginTop: "15px" }}>
              Giriş Yap
            </Button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
}
