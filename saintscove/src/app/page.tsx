import Navbar from "../../components/NavBar";

export default function HomePage() {
  return (
    <main>
      <div className="bg-homebg bg-cover bg-fixed w-screen h-screen flex items-center justify-center">
        <Navbar />
        <h1 className="text-9xl font-black text-black subpixel-antialiased h-screen uppercase flex items-center flex:justify-items-start">
          Welcome To The Saint's Cove 
          </h1>
      </div>
    </main>
  );
}
