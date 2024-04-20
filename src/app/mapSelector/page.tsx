import Link from "next/link";
import Image from "next/image";
export default function MapSelector() {
  const navigation = [
    {
      name: "Customs",
      src: "https://eftguessr-maps1-images1.s3.us-west-1.amazonaws.com/Banners/Banner_customs.png"
    },
    {
      name: "Factory",
      src: "https://eftguessr-maps1-images1.s3.us-west-1.amazonaws.com/Banners/Banner_factory.png"
    },
    {
      name: "Ground Zero",
      src: "https://eftguessr-maps1-images1.s3.us-west-1.amazonaws.com/Banners/Banner_groundzero.png"
    },
    {
      name: "Lighthouse",
      src: "https://eftguessr-maps1-images1.s3.us-west-1.amazonaws.com/Banners/Banner_lighthouse.png"
      
    },
    {
      name: "Interchange",
      src: "https://eftguessr-maps1-images1.s3.us-west-1.amazonaws.com/Banners/Banner_interchange.png"
    },
    {
      name: "Reserve",
      src: "https://eftguessr-maps1-images1.s3.us-west-1.amazonaws.com/Banners/Banner_reserve.png"
    },
    {
      name: "Shoreline",
      src: "https://eftguessr-maps1-images1.s3.us-west-1.amazonaws.com/Banners/Banner_shoreline.png"
    },
    {
      name: "Streets",
      src: "https://eftguessr-maps1-images1.s3.us-west-1.amazonaws.com/Banners/Banner_streets.png"
    },
    {
      name: "The Lab",
      src: "https://eftguessr-maps1-images1.s3.us-west-1.amazonaws.com/Banners/Banner_thelab.png"
    },
    {
      name: "Woods",
      src: "https://eftguessr-maps1-images1.s3.us-west-1.amazonaws.com/Banners/Banner_woods.png"
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <Link className="mb-10 text-2xl" href="/">Home</Link>
    <nav className="grid grid-cols-5 gap-4 sm:grid-cols-1 md:grid-cols-5">
      {navigation.map((link, index) => {
        return (
          <div key={index}>
            <Link href={`mapSelector/${link.name}`}>
              <Image src={`${link.src}`} alt={link.name} width="300" height="200"/>
              <div className="mt-1 text-center">{link.name}</div>
            </Link>
          </div>
        );
      })}
    </nav>
  </main>
  );
}
