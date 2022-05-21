import React, {Component} from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import PTextInput from "../utilities/customFormControls/PTextInput";
import { addContact } from "../api/axios";
import { Container, Header, Button, Label } from "semantic-ui-react";
import Select from "react-select"
import PPassword from "../utilities/customFormControls/PPassword"
export default function KayitOl() {


  const options = [
    { value: '1. Sınıf', label: '1. Sınıf' },
    { value: '2. Sınıf', label: '2. Sınıf' },
    { value: '3. Sınıf', label: '3. Sınıf' },
    { value: '4. Sınıf', label: '4. Sınıf' },
    { value: '5. Sınıf', label: '5. Sınıf' },
    { value: '6. Sınıf', label: '6. Sınıf' },
    { value: '7. Sınıf', label: '7. Sınıf' },
    { value: '8. Sınıf', label: '8. Sınıf' },
    { value: 'Lise', label: 'Lise' },
    { value: 'Yetişkin', label: 'Yetişkin' }
  ]

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
    class: Yup.string().required("zorunlu alan"),
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
          {({errors, setFieldValue, setFieldTouched, values, handleChange}) => (
          <Form className="ui form">
            <PTextInput
              name="username"
              placeholder="Kullanıcı Adı"
            ></PTextInput>
            {/* <PTextInput
              name="password"
              placeholder="Şifre"
              style={{ marginTop: "15px" }}
            ></PTextInput> */}
            <div style={{marginTop:"15px"}}></div>
            <PPassword name="password" placeholder="Şifreyi Girin"></PPassword>
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
              style={{ marginTop: "15px"}}
            ></PTextInput>
            <div style={{marginTop:"15px"}}></div>
            <Select name="class" options={options} onChange={(value)=>{
              setFieldValue("class", value.value)}
            } placeholder="Sınıfınızı seçin."></Select>
            {errors.class ? <div style={{marginBottom:"15px"}}><Label pointing basic color='red' content={errors.class}></Label></div>  : ""}
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
