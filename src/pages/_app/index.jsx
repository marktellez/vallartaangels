import Head from "next/head";
import "./globals.css";

export default function App({ Component, pageProps }) {
  const classNames =
    "sm:mt-8 w-full sm:w-1/2 mx-auto flex flex-col items-center text-center gap-8";
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <>
        <header className={classNames}>
          <div>
            <img src="/logo.png" alt="Vallarta Angels" className="w-[300px]" />
          </div>
        </header>

        <main className={classNames}>
          <Component {...pageProps} />
        </main>

        <footer className="bg-blue-800 my-4">
          <div className={`${classNames} p-4`}>
            <p>
              All support is classified as a charitable donation and is{" "}
              <span className="italic">
                never accepted in cash or in person
              </span>
              . All donations must come through the QR codes you see here. These
              go directly to stripe.com for processing, and you can provide your
              full tax information there as you like, or feel free to keep it
              anonymous. It is up to you!
            </p>
            <p className="w-full text-right font-bold text-sm">
              Founded 2022, Mark and Monse Martinez
            </p>
          </div>
        </footer>
      </>
    </>
  );
}
