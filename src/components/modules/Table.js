import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { sp } from "@/utils/replaceNumber";
import AddItemModal from "./AddItemModal";

import stlyes from "@/styles/Table.module.css";

function Table({ data }) {
  const router = useRouter();

  const [displayed, setDisplayed] = useState();
  const [addModalStatus, setAddModalStatus] = useState(false);

  useEffect(() => {
    setDisplayed(data?.data);
  }, [data]);

  useEffect(() => {
    const sreachedData = data?.data.filter((item) => {
      if (router.query.search) {
        return item.name.includes(router.query.search);
      } else {
        return data;
      }
    });
    setDisplayed(sreachedData);
  }, [router.query]);

  return (
    <div className={stlyes.container}>
      <div className={stlyes.topSide}>
        <div>
          <img src="/images/setting-3.png" alt="Management" />
          <h2>مدیریت کالا</h2>
        </div>
        <button onClick={() => setAddModalStatus(true)}>افزودن محصول</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه کالا</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayed?.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{sp(item.quantity)}</td>
              <td>{sp(item.price)}</td>
              <td>{item.id}</td>
              <td className={stlyes.actions}>
                <img src="/images/edit.png" alt="Edit" />
                <img src="/images/trash.png" alt="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {addModalStatus ? (
        <AddItemModal
          addModalStatus={addModalStatus}
          setAddModalStatus={setAddModalStatus}
        />
      ) : null}
    </div>
  );
}

export default Table;
