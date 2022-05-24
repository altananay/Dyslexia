import { Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import {
  Button,
  Container,
  Header,
  Grid,
  GridRow,
  GridColumn,
} from "semantic-ui-react";
import * as Yup from "yup";
import PTextArea from "../utilities/customFormControls/PTextArea";
import PTextInput from "../utilities/customFormControls/PTextInput";
import { addContact } from "../api/axios";

export default function Iletisim() {

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  };
  const schema = Yup.object({
    firstName: Yup.string().required("isim zorunlu"),
    lastName: Yup.string().required("soyad zorunlu"),
    email: Yup.string()
      .email("Email formatı geçersiz.")
      .required("email zorunlu"),
    description: Yup.string().min(20).required("açıklama gereklidir."),
  });

  return (
    <div style={{backgroundColor: "#fffdd0"}}>
      <Grid>
        <GridRow>
          <GridColumn width={16}>
            <Container text textAlign="center">
              <Header as="h3" style={{ fontSize: "2em", marginLeft:"20px" }}>
                Sadece tek bir tık uzağınızdayız.
              </Header>
              <p style={{ fontSize: "1.33em", marginLeft: "20px" }}>
                Web sitemiz hakkında öneri ve görüşlerinizi bizler ile
                paylaşmanızdan mutluluk duyuyoruz. <br></br>
                Öneri, görüşlerinizi bizlere aşağıdan gönderebilirsiniz.
              </p>
            </Container>
          </GridColumn>
        </GridRow>
      </Grid>
      <Container text style={{ marginTop: "20px" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values, {resetForm}) => {
            addContact(values).then(() => {
              toast.success("form gönderildi. !");
            }).catch(error => {
              toast.warning(error.response.data.message)
            })
            resetForm({values:""})
          }}
        >
          <Form className="ui form">
            <PTextInput name="firstName" placeholder="İsim"></PTextInput>
            <PTextInput
              name="lastName"
              placeholder="Soyisim"
              style={{ marginTop: "15px" }}
            ></PTextInput>
            <PTextInput
              name="email"
              placeholder="email"
              style={{ marginTop: "15px" }}
            ></PTextInput>
            <PTextArea name="description" placeholder="aciklama"></PTextArea>
            <Button color="green" type="submit" style={{ marginTop: "15px" }}>
              Gönder
            </Button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
}
