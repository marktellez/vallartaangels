import Donations from "@/features/donations";

export default function Homepage() {
  return (
    <div className="sm:mt-8 w-full sm:w-1/2 mx-auto flex flex-col items-center text-center gap-8">
      <h1>The Vallarta Angels Mission</h1>

      <p>
        We are a growing volunteer organization dedicated to assisting our
        English speaking visitors feel safe, welcomed, and protected while they
        are guests in our beautiful little city. You will find us in blue hats
        around town and on the Malecon.
      </p>

      <div>
        <img src="/logo.png" alt="Vallarta Angels" className="w-[300px]" />
      </div>

      <div className="flex flex-col gap-5">
        <h2>
          Need help in <span className="italic">English</span> while in
          Vallarta?
        </h2>
        <p className="text-5xl">(322) 192-9824</p>
      </div>

      <div className="border p-8 flex flex-col gap-6">
        <h3>
          Please call from any local Mexico number 24 HOURS a day for help with
        </h3>

        <ul className="text-left text-xl list-disc ml-12">
          <li>Translation and communication over the phone and whatsapp</li>
          <li>Referrals to quality Medical and Legal providers</li>
          <li>Dispute mediation with locals via phone</li>
          <li>If you are lost or afraid we can help you find safety</li>
        </ul>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="uppercase text-5xl">Did we help you?</h2>
        <div>
          <p>
            Your donations are the only thing that keeps the power on and our
            blue hats on the Malecon helping beautiful people like YOU! While we
            are registered with the Mexican board of tourism,
            <em>we recieve no money</em> from anyone in our Government.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 flex-wrap justify-center w-full">
          <Donations />
        </div>
      </div>
    </div>
  );
}
