import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Date from "../../components/date";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighLighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { getAllPostIds, getPostDataAlternative } from "../../lib/posts";

const customRenderers = {
  code(code) {
    const { children, className } = code;
    if (!className) {
      return <code>{children}</code>;
    }
    const language = className.split("-")[1];
    return (
      <SyntaxHighLighter style={nord} language={language}>
        {children}
      </SyntaxHighLighter>
    );
  },
};

export default function Post({ postData }) {
  return (
    <main className="bg-[#FBF6ED] min-h-screen">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navbar />
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col w-[90%] max-w-[720px] mt-36">
          <h3 className="text-3xl font-normal text-black tracking-wide sm:text-4xl md:text-5xl">
            {postData.title}
          </h3>
          <Date dateString={postData.date} />
          <hr className="w-full border-black border-opacity-50 mt-12" />
        </div>
        <Image
          src={postData.image}
          alt={postData.title}
          width={720}
          height={400}
          className="mt-6 mb-2 rounded-sm"
        />
        <div className="flex flex-col w-[90%] max-w-[720px] mt-6 mb-40 text-justify [&>ol]:list-none [&>ol>li]:list-inside [&>ol>li]:py-1 [&>*]:mb-8 [&>h3]:text-2xl [&>p]:text-md [&>pre>code>span]:text-sm">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={customRenderers}
          >
            {postData.content}
          </ReactMarkdown>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostDataAlternative(params.id);
  return {
    props: {
      postData,
    },
  };
}
