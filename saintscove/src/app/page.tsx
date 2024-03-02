import Image from "next/image";
import Navbar from "../../components/NavBar";


export default function HomePage() {
  return (
    <main>
      <div className="bg-homebg bg-cover bg-fixed w-screen h-screen flex flex-col items-center justify-center relative">
        <Navbar />
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2 w-full h-full animate-pulse" style={{ animationDuration: '2s' }}>
            <Image
              src='/images/Black and White Geometric Minimalist Logo-2.jpeg'
              style={{ maxWidth: 500 }}
              width={500}
              height={500}
              alt={"cover"}
              className="animate-pulse opacity-35"
            />

            <h1 className="text-5xl md:text-9xl font-black text-black subpixel-antialiased absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 uppercase flex items-center justify-center md:justify-start z-10 py-4">
              Welcome To The Saint's Cove
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
