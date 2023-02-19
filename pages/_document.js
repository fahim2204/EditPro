import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Script strategy="beforeInteractive" src="/assets/js/lib/pace.js"></Script>
        <Script strategy="beforeInteractive" src="/assets/js/lib/bootstrap.bundle.min.js"></Script>
        <Script strategy="beforeInteractive" src="/assets/js/lib/mixitup.min.js"></Script>
        <Script strategy="beforeInteractive" src="/assets/js/lib/wow.min.js"></Script>
        <Script strategy="beforeInteractive" src="/assets/js/lib/html5shiv.min.js"></Script>
        <Script strategy="lazyOnload" src="/assets/js/main.js"></Script>
        <NextScript />
      </body>
    </Html>
  );
}
