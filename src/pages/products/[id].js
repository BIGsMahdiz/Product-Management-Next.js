import DetailsPage from "@/components/templates/DetailsPage";

function ProductsDetails({ data, images }) {
  const randomImage = Math.floor(Math.random() * 100);
  const oneImage = images.slice(randomImage - 1, randomImage);

  return (
    <div>
      <DetailsPage data={{ data, oneImage }} />
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

  const res2 = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
  const images = await res2.json();

  if (!data.name) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, images },
    revalidate: +process.env.REVALIDATE,
  };
}
