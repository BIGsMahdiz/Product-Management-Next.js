import { AddItemModalInputs } from "@/constants/inputs";
import { useEditProduct } from "@/services/mutations";

import styles from "@/styles/AddItemModal.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function EditItemModal({ setEditModalStatus, editStage, setEditStage }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: 0,
    quantity: 0,
  });

  const queryClient = useQueryClient();

  const { mutate } = useEditProduct();

  useEffect(() => {
    setForm(editStage);
  }, []);

  const changeHandler = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setForm((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const editHandler = (event) => {
    event.preventDefault();

    mutate(form, {
      onSuccess: (data) => {
        toast.success(`محصول ${data.name} با موفقیت تغییر یافت!`);
        console.log(data);
        queryClient.invalidateQueries({
          queryKey: ["getAllProductsDashboard"],
        });
        setEditStage([]);
        setForm({
          id: "",
          name: "",
          price: 0,
          quantity: 0,
        });
        setEditModalStatus(false);
      },
      onError: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h2>ویرایش اطلاعات</h2>
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
            <button onClick={editHandler}>ثبت اطلاعات جدید</button>
            <button onClick={() => setEditModalStatus(false)}>انصراف</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditItemModal;
