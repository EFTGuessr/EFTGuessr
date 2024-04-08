import Link from "next/link";

export default function MapSelector() {
  const navigation = [
    {
      name: "Customs",
    },
    {
      name: "Factory",
    },
    {
      name: "Woods",
    },
    {
      name: "Interchange",
    },
    {
      name: "Shoreline",
    },
    {
      name: "Reserve",
    },
    {
      name: "The Lab",
    },
    {
      name: "Lighthouse",
    },
    {
      name: "Streets",
    },
    {
      name: "Ground Zero",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Link href='/'>Home</Link>
      <nav>
        {navigation.map((link, index) => {
          return (
            <div className="flex justify-center m-2" style={{background: "grey"}}>
              <Link href={`mapSelector/${link.name}`} key={index}>
                <div>{link.name}</div>
              </Link>
            </div>
          );
        })}
      </nav>
    </main>
  );
}
