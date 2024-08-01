import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Date from "../../components/date";

import { getSortedPostsData } from "@/lib/posts";

export default function Blog({ allPostsData }) {
  return (
    <main className="bg-[#FBF6ED] min-h-screen">
      <Navbar />
      <div className="mx-auto flex flex-col items-center justify-center">
        {/* Hero */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-36">
          <h3 className="text-3xl font-normal text-black tracking-wide sm:text-4xl md:text-5xl">
            Some cool posts I&apos;ve written...
          </h3>
        </div>
        <hr className="w-[90%] max-w-[990px] border-black border-opacity-50 mt-12" />
        {/* Posts */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-6 mb-40">
          <ul className="space-y-6">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <a
                  href={`/blog/${id}.html`}
                  className="text-lg font-semibold text-[#2292BF] hover:underline"
                >
                  {title}
                </a>
                <br />
                <small className="text-gray-600">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
