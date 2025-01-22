import { useQueryClient } from "@tanstack/react-query";

import { useDeleteProduct } from "@/services/mutations";

import styles from "@/styles/DeleteItemModal.module.css";

function DeleteItemModal({ setDeleteModalStatus, deleteId }) {
  const queryClient = useQueryClient();

  const { mutate } = useDeleteProduct();

  const editHandler = (event) => {
    event.preventDefault();

    mutate(deleteId, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
        setDeleteModalStatus(false);
      },
      onError: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <img src="/images/Close.png" alt="Delete" />
        <h2>آیا از حذف این محصول مطمئنید؟</h2>
        <form>
          <div className={styles.actions}>
            <button onClick={editHandler}>حذف</button>
            <button onClick={() => setDeleteModalStatus(false)}>انصراف</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteItemModal;
