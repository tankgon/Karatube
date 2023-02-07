import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/global.css";

// Create a client
const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>
          Hát Karaoke Youtube Online Miễn Phí - Karaoke Youtube Online
        </title>
        <meta
          name="title"
          content="Hát Karaoke Youtube Online Miễn Phí - Karaoke Youtube Online"
        />
        <meta
          name="description"
          content="Phần mềm hát karaoke online miễn phí, không cần cài đặt, chạy trực tiếp trên trình duyệt. Tương thích nhiều thiết bị, kho dữ liệu bài hát từ Youtube đầy đủ, chất lượng cao."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karaoke-youtube-online.vercel.app/"
        />
        <meta
          property="og:title"
          content="Hát Karaoke Youtube Online Miễn Phí - Karaoke Youtube Online"
        />
        <meta
          property="og:description"
          content="Phần mềm hát karaoke online miễn phí, không cần cài đặt, chạy trực tiếp trên trình duyệt. Tương thích nhiều thiết bị, kho dữ liệu bài hát từ Youtube đầy đủ, chất lượng cao."
        />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://karaoke-youtube-online.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Hát Karaoke Youtube Online Miễn Phí - Karaoke Youtube Online"
        />
        <meta
          property="twitter:description"
          content="Phần mềm hát karaoke online miễn phí, không cần cài đặt, chạy trực tiếp trên trình duyệt. Tương thích nhiều thiết bị, kho dữ liệu bài hát từ Youtube đầy đủ, chất lượng cao."
        />
        <meta property="twitter:image" content="/assets/og-image.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default App;
