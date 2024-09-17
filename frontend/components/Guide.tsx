"use client";

const Guide = () => {
  return (
    <section className="flexCenter bg-customLBlue flex-col">
      <div
        id="about"
        className="padding-container font-poppins max-container pb-2 w-full mt-24"
      >
        <p className="uppercase flex justify-center regular-18 -mt-1 mb-3 text-gray-20">
          What we do?
        </p>
        <div className="flex flex-wrap flex-col justify-between gap-5 lg:gap-10">
          <h2 className="flex justify-center text-center bold-40 lg:bold-60 text-customDBlue">
            Empowering Web 2.0 with Seamless Crypto Payments
          </h2>
          <p className="flex justify-center regular-16 text-center text-bold text-gray-20  mt-10">
            The current landscape of cryptocurrency payments is fraught with
            challenges like complex integrations, high transaction fees, and
            limited interoperability between blockchain networks, making it
            difficult for both merchants and consumers to adopt digital
            currencies.
            <br />
            The divide between Web 2.0 and Web 3.0 further complicates matters,
            leaving businesses without seamless, decentralized payment
            solutions. 3Pay steps in to address these issues by offering a
            decentralized crypto payment gateway designed to simplify the
            process for everyone involved.
            <br />
            <br />
            Built on the robust foundations of Ethereum and Polygon, 3Pay
            supports a variety of cryptocurrencies, including USDC, USDT, DAI,
            and MATIC. It also features a bridging capability that allows for
            effortless transfer of assets between Ethereum and other supported
            chains, enhancing liquidity and usability across multiple blockchain
            networks.
            <br />
            To make integration even easier, 3Pay generates custom components
            tailored to developers' specific needs, ensuring compatibility with
            popular frameworks like Next.js and React. With 3Pay, digital
            payments become secure, accessible, and incredibly user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
