import Navbar from "../../components/NavBar";

export default function HomePage() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="bg-background bg-contain w-screen h-96 bg-no-repeat">
        <div className="text-9xl font-bold text-center text-black subpixel-antialiased h-screen flex items-center justify-center">
          Welcome To The Saint's Cove
        </div>
      </div>
    </main>
  );
}
