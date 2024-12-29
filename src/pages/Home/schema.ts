import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(3, "Too Short!"),
  lastName: Yup.string().required("Last name is required").min(3, "Too Short!"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
});
