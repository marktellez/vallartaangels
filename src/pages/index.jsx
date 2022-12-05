import Head from "next/head";
import Donations from "features/donations";

export default function Homepage() {
  return (
    <div className="md:w-2/3 min-h-[100vh] mx-auto py-6 px-4">
      <Head>
        <title>Vallarta Angels</title>
        <meta
          name="description"
          content="We are a growing volunteer organization dedicated to assisting our English speaking visitors feel safe, welcomed, and protected while they are guests in our beautiful little city. You will find us in blue hats around town and on the Malecon."
        />
      </Head>
      <header className="flex flex-col items-center gap-y-4 md:flex-row md:justify-between">
        <div className="logo-text text-2xl">
          <span className="font-semibold">Vallarta</span>
          <span className="italic font-medium">Angels</span>
        </div>
        <nav className="flex gap-2">
          {" "}
          <a href="/">Home</a>
          <a href="/donations">Donate</a>
          <a href="/">YouTube</a>
        </nav>
      </header>
      <section className="hero w-[80%] mx-auto py-12 text-center mt-14">
        <h1>The Vallarta Angels Mission</h1>
        <p className="mt-4">
          We are a growing volunteer organization dedicated to assisting our
          English speaking visitors feel safe, welcomed, and protected while
          they are guests in our beautiful little city. You will find us in blue
          hats around town and on the Malecon.
        </p>
      </section>
      <section className="need-help text-center">
        <img className="w-[450px] mx-auto mb-6" src="./logo.png" />
        <h2>
          Need Help in <span className="italic">English</span> while in
          Vallarta?
        </h2>
        <div className="bg-blue-700 rounded p-4 mt-4 max-w-[500px] mx-auto">
          <p className="text-3xl font-semibold">
            Call{" "}
            <a className="no-underline" href="tel:3221929824">
              (322) 192-9824
            </a>
          </p>
        </div>
        <div className="helps-with mt-12">
          <p className="text-center text-xl font-bold">
            Please call from any local Mexico number 24 HOURS a day for help
            with:
          </p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
            <div className="border-2 border-white rounded text-left p-6">
              <img
                className="max-w-[60px] important"
                src="./check.svg"
                alt="Icon image"
              />
              <h3 className="font-light mt-4">
                Translation and communication over the phone and whatsapp.
              </h3>
            </div>
            <div className="border-2 border-white rounded text-left p-6">
              <img
                className="max-w-[60px] important"
                src="./check.svg"
                alt="Icon image"
              />
              <h3 className="font-light mt-4">
                Referrals to quality Medical and Legal providers.
              </h3>
            </div>
            <div className="border-2 border-white rounded text-left p-6">
              <img
                className="max-w-[60px] important"
                src="./check.svg"
                alt="Icon image"
              />
              <h3 className="font-light mt-4">
                Dispute mediation with locals via phone.
              </h3>
            </div>
            <div className="border-2 border-white rounded text-left p-6">
              <img
                className="max-w-[60px] important"
                src="./check.svg"
                alt="Icon image"
              />
              <h3 className="font-light mt-4">
                If you are lost or afraid we can help you find safety.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-800 donate p-6 lg:w-2/3 mx-auto text-center rounded mt-12">
        <h2>Did we help you?</h2>
        <p className="mt-4">
          Your donations are the only thing that keeps the power on and our blue
          hats on the Malecon helping beautiful people like YOU! While we are
          registered with the Mexican Board of Tourism,we recieve no money from
          anyone in our Government.
        </p>
        <div className="flex justify-center mx-auto mt-6">
          <Donations />
        </div>
      </section>
    </div>
  );
}
