import { Form, Formik } from "formik";
import { Container, Header, Button } from "semantic-ui-react";
import PTextInput from "../utilities/customFormControls/PTextInput";
import PPassword from "../utilities/customFormControls/PPassword";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import React from "react";
import { adminLogin } from "../api/axios";
import { ToastContainer } from "react-toastify";
const SignInAdmin = ({ admin, setAdmin }) => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    passwordAgain: "",
  };

  const schema = Yup.object({
    username: Yup.string().required("kullanıcı adı zorunlu"),
    password: Yup.string().required("şifre zorunlu"),
    passwordAgain: Yup.string()
      .oneOf([Yup.ref("password"), null], "Şifreler eşleşmeli")
      .required("Boş bırakılamaz."),
  });

  return (
    <div style={{ marginTop: "200px" }}>
      <Container text textAlign="center">
        <Header as="h3" style={{ fontSize: "2em" }}>
          Giriş Yap
        </Header>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            adminLogin(values).then((response) => {
                localStorage.setItem("admin", JSON.stringify(response.data.admin));
                setAdmin(response.data.admin);
                toast.success("giriş başarılı");
                navigate("/admin");
              })
              .catch((error) => {
                console.log(error.response.data.message);
              });
          }}
        >
          <Form className="ui form">
            <ToastContainer position="bottom-right"></ToastContainer>
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
};

export default SignInAdmin;
