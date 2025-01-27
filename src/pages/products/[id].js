function ProductsDetails({ data }) {
  return (
    <div style={{ maxWidth: "1000px", margin: "auto" }}>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.price}</p>
      <p>{data.quantity}</p>
    </div>
  );
}

export default ProductsDetails;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3001/products`);
  const data = await res.json();
  const paths = data.data
    .slice(0, 10)
    .map((item) => ({ params: { id: item.id.toString() } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:3001/products/${params.id}`);
  const data = await res.json();

  if (!data.name) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
}
