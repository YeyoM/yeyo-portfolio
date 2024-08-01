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
            Lofi Terminal - Your Companion for Coding Journeys 🎶
          </h1>
          <p className="text-md font-normal text-black text-justify">
            Welcome to Lofi Terminal, where every developer finds solace in the
            rhythmic beats of lo-fi music during those intense coding marathons.
            Built with Next.js and React-terminal, this web-based lofi player is
            not just an app; it&apos;s an experience. View the live demo{" "}
            <a
              className="text-[#2292BF] hover:underline"
              href="https://lofi-terminal.vercel.app/"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <Image
            src="https://images.unsplash.com/photo-1630713815150-2c847025c1d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lofi Terminal"
            width={680}
            height={400}
            className="rounded-lg mt-6 mb-2"
          />
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            What is Lofi?
          </h3>
          <p className="text-md font-normal text-black text-justify">
            Lofi refers to a recording with less than professional or flawed
            sound quality. “Lo-fi” is short for “low fidelity,” and initially
            referred to a low-quality recording with audible imperfections, such
            as background noise or performance mistakes, recorded with
            inexpensive equipment—the opposite of high fidelity or hi-fi
            production. Lofi music can reduce stress and enhance focus,
            resulting in quality study sessions. Lofi and other musical styles
            can help students reduce distractions while boosting brain activity.
            Slower, relaxing music can improve your mood by increasing serotonin
            and dopamine levels. A study from Montreal&apos;s McGill University
            found that music listeners receive up to a 9% boost in dopamine
            levels. This boost in brain chemicals can enhance studying by
            keeping developers and students focused and relaxed. In addition to
            elevating mood and increasing brain activity, lo-fi music offers a
            solid list of benefits that can help you make the most of your
            studying. Keep reading to learn more about the benefits of lofi
            music.
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Key Features
          </h3>
          <p className="text-md font-normal text-black text-justify">
            Seamless Integration with React-Terminal: Navigate and control your
            lofi experience with the familiarity of a terminal interface.
          </p>
          <p className="text-md font-normal text-black text-justify">
            Live Demo: Experience the magic of lofi music with a live demo{" "}
            <a
              className="text-[#2292BF] hover:underline"
              href="https://lofi-terminal.vercel.app/"
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
            <span className="font-semibold">Languages:</span> JavaScript, HTML,
            CSS
          </p>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Tools:</span> Git, GitHub, Firebase
          </p>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Frameworks:</span> Next.js, React.js
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Contributions and Design
          </h3>
          <p className="text-md font-normal text-black text-justify">
            I initiated this project with the goal of creating a seamless and
            enjoyable lofi experience for developers. The integration of
            React-terminal not only adds a touch of nostalgia but also enhances
            user control. The design focuses on simplicity, ensuring a
            distraction-free environment for maximum productivity.
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Check out the code on my GitHub
          </h3>
          <p className="text-md font-normal text-black text-justify mt-4">
            Feel free to explore the inner workings on my GitHub repository{" "}
            <a
              className="text-[#2292BF] hover:underline"
              href="https://github.com/YeyoM/lofi_code"
              target="_blank"
            >
              here
            </a>
            . Contributions and feedback are always welcome. In the world of
            coding, where precision meets creativity, let Lofi Terminal be your
            companion. Happy coding! 🚀🎧
          </p>
        </div>
        <Footer />
      </div>
    </main>
  );
}

