import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { StoreNav } from "../components/StoreNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StoreNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
