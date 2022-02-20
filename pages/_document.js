import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
