
import Image from "next/image";


const Guide = () => {

  return (
    <section className="flexCenter bg-customLBlue flex-col">

     {/* <div className="flexCenter max-container bg-customDBlue h-[440px] relative w-full">
        <div className="relative flex flex-1 items-start lg:block hidden">
          <div className="relative z-30 flex w-[268px] flex-col gap-8 rounded-3xl bg-white px-7 py-8 md:left-[7%] lg:top-20">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-80">Location</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
              <p className="bold-20 text-customDBlue">Aguas Calientes</p>
            </div>
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-80">Distance</p>
                <p className="bold-20 text-customDBlue">173.28 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-80">Elevation</p>
                <p className="bold-20 text-customDBlue">2.040 km</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-30 flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[38%] lg:top-10 ">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Web2</p>
                <p className="bold-16 text-customDBlue">Smart Connect</p>
              </div>
              <p className="bold-20 mt-2">Payment Gateway</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Web3</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Crypto Wallet</h4>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image
            src="/blockchain.png"
            alt="camp"
            width={50} // Increased width
            height={50} // Increased height
            className="absolute bottom-[-180px] left-[-400px] w-[300px] h-[300px]" // Adjusted size and position
          />
        </div>
      </div>*/}

      <div
        id="about"
        className="padding-container max-container pb-2 w-full mt-24"
      >
        <p className="uppercase flex justify-center regular-18 -mt-1 mb-3 text-gray-20">
          What we do
        </p>
        <div className="flex flex-wrap flex-col justify-between gap-5 lg:gap-10">
          <h2 className="flex justify-center bold-40 lg:bold-64 text-customDBlue">
            Empowering Web 2.0 with Seamless Crypto Payments
          </h2>
          <p className="flex justify-center regular-16 text-bold text-gray-50  mt-10">
            3Pay revolutionizes online transactions by integrating
            cryptocurrency payments into Web 2.0 platforms effortlessly.
            Designed for simplicity and efficiency, 3Pay allows developers to
            embed cryptocurrency payment options into their websites with
            minimal setup, leveraging popular libraries such as Next.js and
            React. This platform supports a wide range of tokens including USDC,
            USDT, MATIC, and others, ensuring flexibility for users. With its
            built-in bridging feature, 3Pay enables easy conversion of
            cryptocurrencies into MATIC, facilitating smooth transactions
            regardless of the tokens users hold. Built on the Polygon network,
            3Pay benefits from incredibly low gas fees, offering faster, more
            reliable, and affordable transactions. By enhancing accessibility to
            digital assets and providing a seamless payment experience, 3Pay
            aims to accelerate the adoption of cryptocurrencies in everyday
            online activities, making digital payments more accessible and
            efficient for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
