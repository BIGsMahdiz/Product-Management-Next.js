import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Layout from "@/components/layouts/Layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ReactQueryProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReactQueryProvider>
    </>
  );
}
