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
            My Personal Portfolio
          </h1>
          <p className="text-md font-normal text-black text-justify">
            Welcome to my personal portfolio! I am a computer science student at
            Universidad Autónoma de Aguascalientes. I am passionate about
            software engineering and SRE practices. I built this portfolio to
            showcase my projects and skills. Feel free to explore and reach out
            to me if you have any questions or opportunities for collaboration.
            You can view the code for this portfolio on my GitHub repository{" "}
            <a
              className="text-[#2292BF] hover:underline"
              href="https://github.com/YeyoM/portfolio"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <Image
            src="https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lofi Terminal"
            width={680}
            height={400}
            className="rounded-lg mt-6 mb-2"
          />
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            How was this portfolio built?
          </h3>
          <p className="text-md font-normal text-black text-justify">
            For a while now, I have been exploring the world of web development
            and software engineering. I decided to build this portfolio using
            Next.js to provide the best experience to the user when navigating
            through the site. The design is focused on simplicity and
            accessibility, ensuring a seamless experience for users across
            devices.
          </p>
          <p className="text-md font-normal text-black text-justify mt-2">
            As I mentioned earlier, I am passionate about SRE and DevOps
            practices. I have integrated CI/CD pipelines using GitHub Actions to
            automate the deployment process. This allows me to focus on
            developing new features and improving the site without worrying
            about the deployment process. Also, this website is hosted on a
            DigitalOcean droplet using Nginx as a reverse proxy to serve the
            Next.js application. This setup ensures optimal performance and
            security for the site. You can find more details about the setup on
            a blog post I wrote{" "}
            <a
              className="text-[#2292BF] hover:underline"
              href="https://github.com/YeyoM/portfolio"
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
            <span className="font-semibold">Languages:</span> JavaScript, YAML
          </p>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Tools:</span> Git, GitHub Actions,
            DigitalOcean, Nginx, Docker, Docker Compose
          </p>
        </div>
        <Footer />
      </div>
    </main>
  );
}
