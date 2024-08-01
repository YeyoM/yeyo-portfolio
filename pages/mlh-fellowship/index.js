import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-[#FBF6ED] min-h-screen">
      <Navbar />
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col w-[90%] max-w-[680px] mt-40 mb-24">
          <h1 className="text-5xl font-normal text-black tracking-wide mb-14">
            Navigating the MLH Fellowship: A Dive into Production Engineering
            with Meta 🚀
          </h1>
          <p className="text-md font-normal text-black text-justify">
            Hey folks! I&apos;m here to talk about the MLH Fellowship, and
            I&apos;m buzzing to spill the tea on this transformative ride in the
            Production Engineer track powered by Meta.
          </p>
          <Image
            src="/fellowship-2.jpg"
            alt="Major League Hacking PE Summer Batch 2023"
            width={680}
            height={400}
            className="rounded-lg mt-6 mb-2"
          />
          <p className="text-md font-normal text-black text-justify italic">
            Major League Hacking PE Summer Batch 2023
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Decoding Production Engineering
          </h3>
          <p className="text-md font-normal text-black text-justify">
            Ever wondered what a production engineer does? It&apos;s this cool
            mashup of software, systems, and network sorcery—everything from
            code crafting to tackling tricky production puzzles.
          </p>

          <p className="text-md font-normal text-black text-justify">
            Thrown into the deep end with a personal project, I dove into
            Docker, nginx, and managing a Virtual Private Server like a tech
            ninja. Now, I&apos;m rocking skills I never thought I&apos;d master.
          </p>

          <p className="text-md font-normal text-black text-justify">
            Bug fixing in production got real, and the fellowship armed me with
            bash scripting and Linux wisdom. It&apos;s like having a superhero
            toolkit for tech hiccups.
          </p>

          <p className="text-md font-normal text-black text-justify">
            Meta&apos;s Production Engineers dropped knowledge bombs in
            workshops. Connecting theory to real-world Meta magic was
            mind-blowing—it&apos;s like peeking behind the tech curtain.
          </p>

          <p className="text-md font-normal text-black text-justify">
            Being part of an awesome pod with super talented peers was a
            game-changer. No more solo struggles—questions found answers, and
            discoveries were shared. Big shoutout to Charbel Breydy Torres, our
            pod leader extraordinaire!
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Big Thanks to Mentors and Pod Maestro
          </h3>
          <p className="text-md font-normal text-black text-justify">
            A massive shoutout to MLH Fellowship and our mentors, Alexa Flesch
            and Adhip Gupta. And a virtual high-five to Charbel Breydy Torres
            for leading our pod with style! Grateful for this chance to level
            up.
          </p>
          <p className="text-md font-normal text-black text-justify">
            This journey has been a mix of growth, camaraderie, and the thrill
            of diving into the tech world. Ready for the next adventure! 🚀
          </p>
          <p className="text-md font-normal text-black text-justify mt-4">
            Learn more about the MLH Fellowship{" "}
            <a
              className="text-[#2292BF] hover:underline"
              href="https://fellowship.mlh.io/"
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
            <span className="font-semibold">Languages:</span> Bash, Python,
            yaml, HTML, CSS, JavaScript
          </p>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Frameworks:</span> Flask
          </p>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Tools:</span> Docker, nginx, Git,
            GitHub, Linux, DigitalOcean
          </p>
          <Image
            src="/fellowship.png"
            alt="MLH Fellowship"
            width={680}
            height={400}
            className="rounded-lg mt-6 mb-2"
          />
        </div>
        <Footer />
      </div>
    </main>
  );
}

