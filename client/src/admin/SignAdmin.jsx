import React from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Container, Header, Button, Label } from "semantic-ui-react";
import Select from "react-select";
import PTextInput from "../utilities/customFormControls/PTextInput";
import PPassword from "../utilities/customFormControls/PPassword";
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { adminSignUp } from "../api/axios";
import { ToastContainer } from "react-toastify";
const SignAdmin = () => {
  const options2 = [
    { value: "Erkek", label: "Erkek" },
    { value: "Kız", label: "Kız" },
    { value: "Belirtmek İstemiyorum", label: "Belirtmek İstemiyorum" },
  ];

  const initialValues = {
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordAgain: "",
    email: "",
    gender: "",
    age: "",
  };

  const schema = Yup.object({
    username: Yup.string().required("kullanıcı adı zorunlu"),
    password: Yup.string()
      .required("şifre zorunlu")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "En Az 8 Karakter, Bir Büyük Harf, Bir Küçük Harf, Bir Rakam ve Bir Özel Karakter İçermelidir"
      ),
    passwordAgain: Yup.string()
      .oneOf([Yup.ref("password"), null], "Şifreler eşleşmeli")
      .required("Boş bırakılamaz."),
    email: Yup.string()
      .email("Email formatı geçersiz.")
      .required("email zorunlu"),
    gender: Yup.string().required("zorunlu alan"),
    age: Yup.string().required("Yaş zorunlu"),
    firstName: Yup.string().required("isim zorunlu"),
    lastName: Yup.string().required("Soyad zorunlu."),
  });

  return (
    <div className="list2">
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        <Container text textAlign="center">
          <Header as="h3" style={{ fontSize: "2em" }}>
            Admin Kaydet
          </Header>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
              adminSignUp(values).then(() => {
                toast.success("Admin başarıyla kayıt edildi.")
              }).catch(error => {
                toast.warning(error.response.data.message);
              })
              resetForm({ values: "" });
            }}
          >
            {({
              errors,
              setFieldValue,
              setFieldTouched,
              values,
              handleChange,
            }) => (
              <Form className="ui form">
                <ToastContainer position="bottom-right"></ToastContainer>
                <PTextInput
                  name="username"
                  placeholder="Kullanıcı Adı"
                ></PTextInput>
                <PTextInput
                  name="firstName"
                  placeholder="Adınızı girin."
                  style={{ marginTop: "15px" }}
                ></PTextInput>
                <PTextInput
                  name="lastName"
                  placeholder="Soyadınızı Girin."
                  style={{ marginTop: "15px" }}
                ></PTextInput>
                <div style={{ marginTop: "15px" }}></div>
                <PPassword
                  name="password"
                  placeholder="Şifreyi Girin"
                ></PPassword>
                <div style={{ marginTop: "15px" }}></div>
                <PPassword
                  name="passwordAgain"
                  placeholder="Şifreyi tekrar girin"
                ></PPassword>
                <PTextInput
                  name="email"
                  placeholder="email"
                  style={{ marginTop: "15px" }}
                ></PTextInput>
                <PTextInput
                  name="age"
                  placeholder="yaşınızı girin"
                  style={{ marginTop: "15px" }}
                ></PTextInput>
                <div style={{ marginTop: "15px" }}></div>
                <Select
                  name="gender"
                  options={options2}
                  onChange={(value) => {
                    setFieldValue("gender", value.value);
                  }}
                  placeholder="Cinsiyet"
                ></Select>
                <div style={{ marginBottom: "20px" }}></div>
                {errors.class ? (
                  <div style={{ marginBottom: "15px" }}>
                    <Label
                      pointing
                      basic
                      color="red"
                      content={errors.class}
                    ></Label>
                  </div>
                ) : (
                  ""
                )}
                {errors.class ? (
                  <div style={{ marginBottom: "15px" }}>
                    <Label
                      pointing
                      basic
                      color="red"
                      content={errors.class}
                    ></Label>
                  </div>
                ) : (
                  ""
                )}
                <Button
                  color="green"
                  type="submit"
                  style={{ marginTop: "15px" }}
                >
                  Kayıt Ol
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </div>
  );
};

export default SignAdmin;
