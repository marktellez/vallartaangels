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
