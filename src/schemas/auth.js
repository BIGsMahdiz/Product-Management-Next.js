import * as yup from "yup";

const registerSchema = yup
  .object({
    username: yup
      .string("اسم کاربری شما باید به صورت متن باشه!")
      .required("فیلد نام کاربری رو پرکنید!"),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "گذرواژه شما باید یکسان باشد!"),
  })
  .required();

const loginSchema = yup
  .object({
    username: yup
      .string("اسم کاربری شما باید به صورت متن باشه!")
      .required("فیلد نام کاربری رو پرکنید!"),
    password: yup.string().required(),
  })
  .required();

export { registerSchema, loginSchema };
