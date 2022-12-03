export default function Donations({}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-3 transition-all duration-500  hover:bg-white  hover:text-blue-500 rounded">
        <img
          src="/qr-otd.png"
          alt="One time donation"
          className="w-full p-8 sm:p-0 sm:w-[120px] sm:h-[120px]"
        />

        <a className="text-lg" href="https://buy.stripe.com/dR66rY7Qy9lp240eUY">
          One time Angel
        </a>
      </div>
      <div className="flex flex-col justify-center items-center p-3 transition-all duration-500  hover:bg-white  hover:text-blue-500 rounded">
        <div>
          <img
            src="/qr-md.png"
            alt="Monthly support"
            className="w-full p-8 sm:p-0 sm:w-[120px] sm:h-[120px]"
          />
        </div>
        <div>
          <a
            className="text-lg"
            href="https://buy.stripe.com/fZe17Ec6O4156kg002"
          >
            Monthly Angel
          </a>
        </div>
      </div>
    </>
  );
}
