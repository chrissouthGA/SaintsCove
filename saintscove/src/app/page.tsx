import Image from "next/image";
import Navbar from "../../components/NavBar";


export default function Home() {
  return (
    <main>
      <div>
        Saint's Cove
        <Navbar />
        <section className="w-full mx-auto">
          <div className="h-96 w-full">
            <Image
              className="bg-auto hover:bg-contain"
              src='/images/Black and White Geometric Minimalist Logo-2.png'
              width={800}
              height={600}
              alt="Background"
              priority={true}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
