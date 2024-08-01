import Image from "next/image";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <main className="bg-[#FBF6ED] min-h-screen">
      <Navbar />
      <div className="mx-auto flex flex-col items-center justify-center">
        {/* Hero */}
        <div className="flex flex-col md:flex-row w-[90%] max-w-[990px] mt-36 h-auto">
          {/* Left side */}
          <div className="w-full">
            <h3 className="text-5xl font-normal text-black tracking-wide mb-10">
              hi there!
            </h3>
            <p className="text-[1rem] md:text-xl font-normal text-black tracking-wide mb-10">
              I am Diego, a computer science student at Universidad Autónoma de
              Aguascalientes, Mex. <br /> <br />
              I have a strong passion for software engineering and all the
              exciting aspects that come with it. <br /> <br />
              Throughout my academic journey, I have developed a keen interest
              in frontend development and Site Reliability Engineering.
              <br /> <br />
              I love music and playing my guitar to indie beats. I also enjoy
              playing and watching basketball (I’ve been a Spurs fan since
              2017).
              <br /> <br />
              There is much more stories that I can’t cover in here but that I
              would love to share with you. Feel free to reach out via the links
              in the footer below!
            </p>
          </div>
          {/* Right side */}
          <div className="w-full flex flex-col items-center justify-center">
            {/* Collage */}
            <Image
              src="/img-1.png"
              alt="Picture of the author"
              width={226}
              height={226}
              className="relative md:z-10 md:top-[20px] md:left-[-95px] mb-4"
            />
            <Image
              src="/img-2.png"
              alt="Picture of the author"
              width={226}
              height={226}
              className="relative md:z-10 md:top-[-80px] md:left-[105px] mb-4"
            />
            <Image
              src="/img-3.png"
              alt="Picture of the author"
              width={226}
              height={226}
              className="relative md:z-10 md:top-[-180px] md:left-[-95px] mb-4"
            />
            <Image
              src="/img-4.png"
              alt="Picture of the author"
              width={226}
              height={226}
              className="relative md:z-10 md:top-[-270px] md:left-[105px]"
            />
            <p className="text-xl font-light italic  text-black tracking-wide mt-10 relative md:z-10 md:top-[-280px] md:left-[60px] mb-4">
              Me and some cool folks :)
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
