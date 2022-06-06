import "../ui/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "../ui/themes/theme";
import Cabecalho from "../ui/components/Cabecalho/Cabecalho";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      Opaaa
      <ThemeProvider theme={theme}>
        <Cabecalho />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
