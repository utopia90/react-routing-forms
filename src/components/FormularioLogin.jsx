import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const FormularioLogin = () => {
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.table(values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email("Email no es válido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .email("Contraseña no es válida")
        .required("la contraseña es obligatoria")
        .min(8, "La contraseña deberia tener al menos 8 caracteres"),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name='email' type='text' placeholder='email/Usuario' value=
            {values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && 'error'}
           />
            {errors.email && touched.email && (
                <div>
               {errors.email}
           </div>
            )}
         
        </form>
      );
    }}
  </Formik>;
};

export default FormularioLogin;
