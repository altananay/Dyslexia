import React from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import PTextInput from "../utilities/customFormControls/PTextInput";
import { signUp } from "../api/axios";
import { Container, Header, Button, Label } from "semantic-ui-react";
import Select from "react-select";
import PPassword from "../utilities/customFormControls/PPassword";
import { useNavigate } from "react-router-dom";

export default function KayitOl() {
  const navigate = useNavigate();

  const options = [
    { value: "1. Sınıf", label: "1. Sınıf" },
    { value: "2. Sınıf", label: "2. Sınıf" },
    { value: "3. Sınıf", label: "3. Sınıf" },
    { value: "4. Sınıf", label: "4. Sınıf" },
    { value: "5. Sınıf", label: "5. Sınıf" },
    { value: "6. Sınıf", label: "6. Sınıf" },
    { value: "7. Sınıf", label: "7. Sınıf" },
    { value: "8. Sınıf", label: "8. Sınıf" },
    { value: "Lise", label: "Lise" },
    { value: "Yetişkin", label: "Yetişkin" },
  ];

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
    grade: "",
    age: "",
  };

  const schema = Yup.object({
    username: Yup.string().required("kullanıcı adı zorunlu"),
    password: Yup.string().required("şifre zorunlu"),
    // .matches(
    //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   "En Az 8 Karakter, Bir Büyük Harf, Bir Küçük Harf, Bir Rakam ve Bir Özel Karakter İçermelidir"
    // ),
    passwordAgain: Yup.string()
      .oneOf([Yup.ref("password"), null], "Şifreler eşleşmeli")
      .required("Boş bırakılamaz."),
    email: Yup.string()
      .email("Email formatı geçersiz.")
      .required("email zorunlu"),
    gender: Yup.string().required("zorunlu alan"),
    grade: Yup.string().required("zorunlu alan"),
    age: Yup.string().required("Yaş zorunlu"),
    firstName: Yup.string().required("isim zorunlu"),
    lastName: Yup.string().required("Soyad zorunlu."),
  });

  return (
    <div>
      <Container text textAlign="center">
        <Header as="h3" style={{ fontSize: "2em" }}>
          Kayıt Ol
        </Header>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            signUp(values)
              .then(() => {
                toast.success(
                  "Başarıyla kayıt oldunuz. Giriş yap sayfasına yönlendiriliyorsunuz."
                );
                navigate("/girisyap");
              })
              .catch((error) => {
                toast.warn(error.response.data.message);
              });
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
              <Select
                name="grade"
                options={options}
                onChange={(value) => {
                  setFieldValue("grade", value.value);
                }}
                placeholder="Sınıfınızı seçin."
              ></Select>
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
              <Button color="green" type="submit" style={{ marginTop: "15px" }}>
                Kayıt Ol
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}
