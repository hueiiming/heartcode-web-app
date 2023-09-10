import Head from "next/head";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../components/Theme/ThemeProvider";
import { useTheme } from "next-themes";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Set the initial theme to "light" on the first load and on refresh
    setTheme("light");
  }, [setTheme]);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Project HeartCode is a community service project organised by Singapore Management University, School of Computing and Information Systems. Project HeartCode serves to provide less privileged youths the opportunity to explore their interest in IT through solving real world problems with IT innovations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
