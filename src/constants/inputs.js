const registerInputs = [
  { id: 1, type: "text", name: "username", placeholder: "نام کاربری" },
  { id: 2, type: "password", name: "password", placeholder: "رمزعبور" },
  {
    id: 3,
    type: "password",
    name: "confirmPassword",
    placeholder: "تکرار رمزعبور",
  },
];

const loginInputs = [
  { id: 1, type: "text", name: "username", placeholder: "نام کاربری" },
  { id: 2, type: "password", name: "password", placeholder: "رمزعبور" },
];

const AddItemModalInputs = [
  {
    id: 1,
    type: "text",
    name: "name",
    placeholder: "نام کالا ",
    lable: "نام کالا ",
  },
  {
    id: 2,
    type: "number",
    name: "quantity",
    placeholder: "تعداد",
    lable: "تعداد موجودی",
  },
  { id: 3, type: "number", name: "price", placeholder: "قیمت", lable: "قیمت" },
];

export { registerInputs, loginInputs, AddItemModalInputs };
