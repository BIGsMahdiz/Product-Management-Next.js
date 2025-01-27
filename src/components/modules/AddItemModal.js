import { AddItemModalInputs } from "@/constants/inputs";
import { useAddProduct } from "@/services/mutations";

import styles from "@/styles/AddItemModal.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

function AddItemModal({ setAddModalStatus }) {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });

  const queryClient = useQueryClient();

  const { mutate } = useAddProduct();

  const changeHandler = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setForm((prev) => ({ ...prev, [inputName]: inputValue }));
  };
  console.log(form);

  const addHandler = (event) => {
    event.preventDefault();

    mutate(form, {
      onSuccess: (data) => {
        toast.success(`محصول ${data.name} با موفقیت اضافه شد!`);
        console.log(data);
        queryClient.invalidateQueries({ queryKey: ["getAllProductsDashboard"] });
        setAddModalStatus(false);
      },
      onError: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h2>ایجاد محصول جدید</h2>
        <form>
          {AddItemModalInputs.map((info) => (
            <div className={info.id} key={info.id}>
              <label htmlFor={info.id}>{info.lable}</label>
              <input
                id={info.id}
                type={info.type}
                name={info.name}
                value={form[info.name]}
                placeholder={info.placeholder}
                onChange={changeHandler}
              />
            </div>
          ))}
          <div className={styles.actions}>
            <button onClick={addHandler}>ایجاد</button>
            <button onClick={() => setAddModalStatus(false)}>انصراف</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemModal;
