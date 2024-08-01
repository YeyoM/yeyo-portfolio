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
            Better Commits - Elevate Your Git Commits 🚀
          </h1>
          <p className="text-md font-normal text-black text-justify">
            Welcome to Better Commits, my personal take on a CLI tool designed
            to help you write better Git commits by adhering to the Conventional
            Commits guidelines. This project, written in Go, aims to streamline
            the commit process, ensuring that every commit message is clear,
            informative, and consistent.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lofi Terminal"
            width={680}
            height={400}
            className="rounded-lg mt-6 mb-2"
          />
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            How It Works?
          </h3>
          <p className="text-md font-normal text-black text-justify">
            Creating a conventional commit with Better Commits involves six
            straightforward steps:
          </p>
          <ol
            className="list-decimal list-inside text-md font-normal text-black text-justify mb-8"
            type="1"
          >
            <li className="mb-2 mt-2">
              Select the type of change that you&apos;re committing (e.g., feat,
              fix, docs).
            </li>
            <li className="mb-2">
              Specify the scope of the change (e.g., user, admin, etc.) or
              select none.
            </li>
            <li className="mb-2">
              Choose a Gitmoji for the commit, or opt-out.
            </li>
            <li className="mb-2">
              Write a short, imperative tense description of the change.
            </li>
            <li className="mb-2">
              Provide a longer description of the change.
            </li>
            <li className="mb-2">
              List any breaking changes or issues closed by this change.
            </li>
          </ol>
          <p className="text-md font-normal text-black text-justify">
            Contributing to Better Commits is easy! Simply clone the repository
            <a
              className="text-[#2292BF] hover:underline ml-1"
              href="https://github.com/YeyoM/better-commits"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <p className="text-md font-normal text-black text-justify mt-4 italic">
            Note: This is my first project in Go and it&apos;s still in
            development. Please be patient with any missing features or bugs.
            Feel free to open an issue, and we can work together to improve the
            tool.
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Tech Stack
          </h3>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Language:</span> Go
          </p>
          <p className="text-md font-normal text-black text-justify ">
            <span className="font-semibold">Tools:</span> Bubbletea, Lipgloss
          </p>
        </div>
        <Footer />
      </div>
    </main>
  );
}
