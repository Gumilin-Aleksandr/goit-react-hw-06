import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const initialValues = {
  contactName: "",
  contactNumber: "",
};

const FeedbackSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  contactNumber: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.contactName,
      number: values.contactNumber,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.container}>
        <div className={s.group}>
          <label htmlFor="contactName">Name</label>
          <Field className={s.field} type="text" name="contactName" />
          <ErrorMessage
            name="contactName"
            component="span"
            className={s.error}
          />
        </div>
        <div className={s.group}>
          <label htmlFor="contactNumber">Number</label>
          <Field className={s.field} type="number" name="contactNumber" />
          <ErrorMessage
            name="contactNumber"
            component="span"
            className={s.error}
          />
        </div>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
