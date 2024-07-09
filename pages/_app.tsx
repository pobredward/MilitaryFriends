import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@emotion/react";
import { Global, css } from "@emotion/react";
import theme from "../styles/theme";

const queryClient = new QueryClient();

const GlobalStyle = css`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);

export default MyApp;
