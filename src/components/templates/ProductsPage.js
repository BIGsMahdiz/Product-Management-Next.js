import Card from "../modules/Card";

import styles from "@/styles/ProductsPage.module.css";

function ProductsPage({ data, images }) {
  const imagesData = images.slice(0, data?.data?.length);

  return (
    <div className={styles.container}>
      {data?.data?.map((item, index) => (
        <Card key={item.id} {...item} image={imagesData[index]} />
      ))}
    </div>
  );
}

export default ProductsPage;
