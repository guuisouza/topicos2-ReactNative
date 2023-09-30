import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("FirstName is required"),
  email: Yup.string()
          .email("Enter a valid email")
          .required("Enter a registred email"),
          
})