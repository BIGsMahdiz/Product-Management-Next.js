import ReactQueryProvider from "@/providers/ReactQueryProvider";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ReactQueryProvider>
        <Component {...pageProps} />
      </ReactQueryProvider>
    </>
  );
}
