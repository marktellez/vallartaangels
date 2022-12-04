import Donations from "@/features/donations";

export default function Homepage() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h2 className="uppercase text-5xl">Did we help you?</h2>
        <div>
          <blockquote className="p-4 border my-8 rounded-sm bg-blue-700">
            <p>
              Our volunteers who wear the blue hats on the Malecon are High
              School and College kids that live and study in Vallarta and they
              are working on speaking english in the you do, and how to
              communicate with non-mexican English speakers.
            </p>
            <p>
              Our program is being modeled after the old Boy/Girl scout programs
              of the 50s and 60s.
            </p>
          </blockquote>

          <h2>
            <span className="italic font-black text-blue-800">
              If you are like us
            </span>
            , and feel that need to give something and{" "}
            <span className="italic font-black text-blue-800">
              make the world a better place
            </span>
            , please consider donating to our organization.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 flex-wrap justify-center w-full">
          <Donations />
        </div>

        <div className="flex flex-col sm:flex-row gap-5 flex-wrap justify-center w-full">
          <p>
            We are also building a stripe direct api call to show your donations
            here with a thank you for being an Angel!
          </p>
        </div>
      </div>
    </>
  );
}
