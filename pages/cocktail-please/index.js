import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-[#FBF6ED] min-h-screen">
      <Navbar />
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col w-[90%] max-w-[680px] mt-40 mb-24">
          <h1 className="text-5xl font-normal text-black tracking-wide mb-8">
            Cocktail Please! - Your Daily Dose of Mixology Inspiration 🍹
          </h1>

          <p className="text-md font-normal text-black text-justify">
            Indulge your love for cocktails with Cocktail Please—the app that
            brings a new cocktail recipe to your fingertips every day. Whether
            you&apos;re a seasoned mixologist or just beginning your cocktail
            journey, this Next.js and Next.js PWA creation is designed to
            elevate your mixology experience. Check out the live demo{" "}
            <a
              className="text-[#2292BF] hover:underline"
              href="https://cocktail-please.vercel.app/"
              target="_blank"
            >
              here
            </a>
            .
          </p>

          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            What is Cocktail Please?
          </h3>

          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cocktail Please"
            width={680}
            height={400}
            className="rounded-lg mt-6 mb-6"
          />

          <p className="text-md font-normal text-black text-justify">
            If you love experimenting with new cocktails, you&apos;re in for a
            treat. Cocktail Please doesn&apos;t just show you recipes; it
            curates a delightful collection of cocktails, recommending a fresh
            recipe each day. But that&apos;s not all—search for your favorite
            concoctions, save them for later, and let the mixology adventure
            begin.{" "}
          </p>

          <p className="text-md font-normal text-black text-justify mt-4">
            You can check out the code on my GitHub{" "}
            <a
              className="text-[#2292BF] hover:underline"
              href="https://github.com/YeyoM/cocktail-please"
              target="_blank"
            >
              here
            </a>
            .
          </p>

          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Tech Stack
          </h3>

          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Languages:</span> JavaScript
          </p>

          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Tools:</span> Git, GitHub, Firebase,
            FIrestore
          </p>

          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Frameworks:</span> Next.js, React.js
          </p>

          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            The Cocktail Please Experience
          </h3>
          <p className="text-md font-normal text-black text-justify">
            Cocktail Please is more than an app; it&apos;s your personal
            mixology companion. I crafted this platform with a passion for
            bringing the joy of mixology to everyone, from casual cocktail
            enthusiasts to seasoned aficionados. The clean interface and easy
            navigation make it a breeze to explore new recipes and build your
            cocktail repertoire.
          </p>
          <p className="text-md font-normal text-black text-justify">
            Embark on a journey of flavors, one cocktail at a time. Cheers to
            endless mixology possibilities! 🍸✨
          </p>
        </div>
        <Footer />
      </div>
    </main>
  );
}

