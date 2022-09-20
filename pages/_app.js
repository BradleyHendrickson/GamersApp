import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { StoreNav } from "../components/StoreNav";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreNav />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
