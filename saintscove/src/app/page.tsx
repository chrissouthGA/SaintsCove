import Navbar from "../../components/NavBar";

export default function HomePage() {
  return (
    <main>
        <div className="bg-homebg bg-cover bg-fixed w-screen h-screen flex items-center justify-center">
        <div>
        <Navbar />
      </div>
         <h1 className="text-9xl font-bold text-black subpixel-antialiased h-screen flex items-center justify-start px-10">Welcome To The Saint's Cove</h1> 
        </div>
    </main>
  );
}
