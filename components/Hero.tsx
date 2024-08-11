import Image from "next/image";
import Button from "./Button";
import ButtonCopy from "./ButtonCopy";

const Hero = () => {
  return (
    <section className="max-container bg-customLBlue padding-container flex flex-col gap-20 pt-10 md:gap-28 lg:pt-20 xl:flex-row ">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 text-customDBlue">
          Seamless
          <br /> Payments
        </h1>
        <p className="regular-16 text-bold mt-6 text-gray-30 xl:max-w-[520px]">
          3Pay simplifies cryptocurrency transactions on Web 2.0 platforms,
          offering an easy integration for developers and a variety of payment
          options for users.
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row mt-4">
  <ButtonCopy
    type="button"
    title="npm i 3pay"
    variant="btn_black_text"
    icon="/copy.png"
  />
</div>

      </div>

      <div className="flexCenter max-container bg-customLBlue h-[440px] relative w-full">
        <div className="relative flex flex-1 items-start lg:block hidden">
          <div className="relative z-30 flex w-[268px] flex-col gap-8 rounded-3xl bg-white px-7 py-8 md:left-[7%] lg:top-20">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-80">cn xsmcmf</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
              <p className="bold-20 text-customLBlue">zc mznd,nfksdl</p>
            </div>
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-80">dkn,fnsdg</p>
                <p className="bold-20 text-customLBlue">173.28</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-80">zs mfdzsmfnks</p>
                <p className="bold-20 text-customLBlue">2.040 km</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-30 flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[60%] lg:bottom-60 ">
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
            width={50} 
            height={50} 
            className="absolute bottom-[-120px] left-[-150px] w-[300px] h-[300px]" 
          />
        </div>
      </div>

    </section>

    
  );
};

export default Hero;