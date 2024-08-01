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
            Wellness - Elevate Your Health and Fitness Journey 🌟
          </h1>
          <p className="text-md font-normal text-black text-justify">
            Welcome to Wellness, where health isn&apos;t just a goal—it&apos;s a
            way of life. This mobile app is your perfect gym companion, designed
            for everyone, from beginners taking their first steps to fitness
            pros pushing their limits. Crafted with React Native, Expo, and
            Firebase, Wellness is more than an app; it&apos;s a commitment to
            your well-being. Unfurtunately, the app is not available on the App
            Store or Google Play Store yet but soon it will be.
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6">
            Understanding Wellness
          </h3>
          <Image
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Wellness"
            width={680}
            height={400}
            className="rounded-lg mt-6 mb-6"
          />
          <p className="text-md font-normal text-black text-justify">
            Wellness isn&apos;t just about surviving; it&apos;s about thriving
            by practicing healthy habits daily. It&apos;s the synergy of
            physical, mental, and social well-being, forming the pillars of the
            Health Triangle. The Wellness app is your guide to achieving and
            tracking this holistic wellness journey.
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Key Features
          </h3>
          <p className="text-md font-normal text-black text-justify">
            Comprehensive Wellness Tracking: Monitor and track your physical and
            mental health with user-friendly interfaces that adapt to your
            fitness level.
          </p>
          <p className="text-md font-normal text-black text-justify">
            Personalized Workouts: Whether you&apos;re a fitness rookie or a
            seasoned pro, Wellness offers personalized workout plans tailored to
            your goals.
          </p>
          <p className="text-md font-normal text-black text-justify">
            Firebase Integration: Seamless data storage and retrieval with
            Firebase, ensuring your wellness journey is always backed up and
            accessible.
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Tech Stack
          </h3>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Languages:</span> JavaScript
          </p>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Tools:</span> Git, GitHub, Firebase,
            FIrestore, Expo
          </p>
          <p className="text-md font-normal text-black text-justify">
            <span className="font-semibold">Frameworks:</span> React Native
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Future Vision - AI and ML Integration
          </h3>
          <p className="text-md font-normal text-black text-justify">
            Our journey doesn&apos;t end here. The Wellness app is set to evolve
            with the integration of Artificial Intelligence (AI) and Machine
            Learning (ML). Imagine having a virtual fitness coach powered by AI,
            analyzing your progress, adapting your workout plans, and offering
            insights to enhance your gains. The future of wellness is smart,
            adaptive, and tailored just for you.
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Check Out the code
          </h3>
          <p className="text-md font-normal text-black text-justify">
            You can check out the code on my GitHub{" "}
            <a
              className="text-[#2292BF] hover:underline"
              href="https://github.com/YeyoM/wellness-mobile-app"
              target="_blank"
            >
              here
            </a>
            . Feel free to contribute and be part of the wellness revolution.
          </p>
          <h3 className="text-2xl font-normal text-black tracking-wide mt-6 mb-4">
            Your Personal Wellness Journey
          </h3>
          <p className="text-md font-normal text-black text-justify mt-4">
            I embarked on this project with the goal of creating an app
            that&apos;s not just a fitness tracker but a true wellness
            companion. The user interface is crafted for simplicity, ensuring
            users of all levels find it easy to navigate and stay committed to
            their health goals. Join us on this journey of wellness, where every
            step you take is a step towards a healthier, thriving you.
            Here&apos;s to your well-being! 🏋️‍♂️🌈
          </p>
        </div>
        <Footer />
      </div>
    </main>
  );
}

