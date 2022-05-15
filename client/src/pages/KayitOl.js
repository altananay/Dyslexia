import React from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import PTextInput from "../utilities/customFormControls/PTextInput";
import { addContact } from "../api/axios";
import { Container, Header, Button } from "semantic-ui-react";
  

export default function KayitOl() {

  const initialValues = {
    username: "",
    password: "",
    passwordAgain: "",
    email: "",
    class: "",
    age: ""
  };


  const schema = Yup.object({
    username: Yup.string().required("kullanıcı adı zorunlu"),
    password: Yup.string().required("şifre zorunlu").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "En Az 8 Karakter, Bir Büyük Harf, Bir Küçük Harf, Bir Rakam ve Bir Özel Karakter İçermelidir"),
    passwordAgain: Yup.string().oneOf([Yup.ref("password"), null], "Şifreler eşleşmeli").required("Boş bırakılamaz."),
    email: Yup.string()
      .email("Email formatı geçersiz.")
      .required("email zorunlu"),
    class: Yup.string().required("Sınıf zorunlu"),
    age: Yup.string().required("Yaş zorunlu")
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
          onSubmit={(values, {resetForm}) => {
              console.log(values);
              toast.success("Başarıyla kayıt oldunuz. !!")
              resetForm({values: ""})
          }}
        >
          <Form className="ui form">
            <PTextInput
              name="username"
              placeholder="Kullanıcı Adı"
            ></PTextInput>
            <PTextInput
              name="password"
              placeholder="Şifre"
              style={{ marginTop: "15px" }}
            ></PTextInput>
            <PTextInput
              name="passwordAgain"
              placeholder="Şifreyi Tekrar Girin"
              style={{ marginTop: "15px" }}
            ></PTextInput>
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
            <Button color="green" type="submit" style={{ marginTop: "15px" }}>
              Kayıt Ol
            </Button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
}
