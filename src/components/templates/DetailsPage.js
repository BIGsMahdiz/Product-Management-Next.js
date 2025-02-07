import styles from "@/styles/DetailsPage.module.css";
import { sp } from "@/utils/replaceNumber";

function DetailsPage({ data }) {
  const { name, price, quantity, id } = data?.data;
  
  return (
    <div className={styles.container}>
      <section>
        <img src={data.oneImage[0].download_url} alt="Product" />
      </section>
      <section>
        <h1>{name}</h1>
        <div>
          <h3>موجودی : {sp(quantity)} </h3>
          <h3>{sp(price)} هزارتومان</h3>
        </div>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quam
          debitis neque dolorem quo. Aut natus pariatur dolor ducimus assumenda?
          Voluptates ipsum recusandae commodi quam qui, earum aperiam, error
          amet et animi enim. Repudiandae quam fuga perspiciatis velit quae
          tenetur ad deserunt, laboriosam quas tempora modi praesentium labore
          vitae quis.
        </p>
        <button>
          <img src="/images/online-shopping.png" alt="Cart" /> Add to Cart
        </button>
      </section>
    </div>
  );
}

export default DetailsPage;
