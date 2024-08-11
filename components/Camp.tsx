import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] border-8 border-customDBlue bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flexEnd h-full flex-col items-start p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-customDBlue p-4">
          <Image
            src="/money.png"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-gray-50">{title}</h4>
          <p className="regular-14 text-customDBlue">{subtitle}</p>
        </div>
      </div>


     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section id='features' className="2xl:max-container bg-customLBlue relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">

<div className="flexCenter mb-10 px-6 lg:-mb-60 lg:ml-6">
        <div className="bg-customDBlue p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            Services We Provide
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          These features collectively underscore 3Pay's commitment to making cryptocurrency payments more accessible, efficient, and user-friendly across Web 2.0 platforms, fostering a broader acceptance of digital currencies in the online marketplace.
</p>
        </div>
        </div>


      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage=""
          title="Effortless Integration for Developers:"
          subtitle="3Pay simplifies the process of adding cryptocurrency payment options to Web 2.0 platforms. By installing the 3Pay package, developers can easily integrate a payment button into their sites, leveraging system compatibility and popular libraries such as Next.js and React. This feature ensures a seamless start for developers looking to incorporate cryptocurrency payments into their online services."
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Wide Range of Supported Tokens:"
          subtitle="Users have the flexibility to make payments using a variety of tokens, including USDC, USDT, MATIC, and other stablecoins. This diversity accommodates different user preferences and ensures that 3Pay remains versatile and accessible for a broad audience interested in utilizing cryptocurrency for online transactions."
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Built-in Bridging Feature for Token Conversion:"
          subtitle="3Pay addresses the challenge of token compatibility by offering a built-in bridging feature. This allows users to convert their cryptocurrencies into MATIC easily, ensuring smooth transactions regardless of the tokens initially held. This feature enhances the overall payment experience by removing barriers related to token diversity."
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Low-Cost Transactions on the Polygon Network:"
          subtitle="Leveraging the Polygon network, 3Pay benefits from incredibly low gas fees, making transactions more affordable, faster, and more reliable. This strategic choice of network infrastructure positions 3Pay as a cost-effective solution for integrating cryptocurrency payments into traditional web platforms, thereby promoting the adoption of digital currencies in everyday online activities."
          peopleJoined="50+ Joined"
        />
      </div>

      
      
    </section>
  )
}

export default Camp