import styles from "@/styles/Card.module.css";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";

function Card({ id, name, price, quantity, image }) {
  console.log({ name, image });

  return (
    <div className={styles.card}>
      <img src={image.download_url} alt="" />
      <h3>{name}</h3>
      <div className={styles.info}>
        <div>
          <h4>تعداد :</h4>
          <p>{sp(quantity)}</p>
        </div>
        <div>
          <h4>قیمت :</h4>
          <p>{sp(price)} هزار تومان</p>
        </div>
      </div>
      <hr />
      <Link href={`/products/${id}`}>
        <button>مشاهده جزئیات</button>
      </Link>
    </div>
  );
}

export default Card;
