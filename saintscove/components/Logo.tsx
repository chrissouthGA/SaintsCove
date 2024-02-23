import Image from "next/image"

export default function Logo() {
  return (
    <section className="w-full mx-auto">
        <Image 
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mt-8"
            src='/images/Black and White Modern Man Youtube Profile Picture (8).png'
            width={95}
            height={100}
            alt="Logo"
            priority={true}
        />
    </section>
  )
}


