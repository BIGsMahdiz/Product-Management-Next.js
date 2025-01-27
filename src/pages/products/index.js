import ProductsPage from "@/components/templates/ProductsPage";

function Products({ data, images }) {
  return (
    <div>
      <ProductsPage data={data} images={images} />
    </div>
  );
}

export default Products;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/products");
  const data = await res.json();

  const res2 = await fetch("https://picsum.photos/v2/list");
  const images = await res2.json();

  return {
    props: { data, images },
    revalidate: +process.env.REVALIDATE,
  };
}
