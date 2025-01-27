import { useRouter } from "next/router";
import { useEffect } from "react";

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/products");
  }, []);

  return <div>Home</div>;
}

export default Home;
