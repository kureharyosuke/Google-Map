import Link from "next/link";
import Layout from "../components/Layout";
import dotenv from "dotenv";
import { ExampleMap } from "../components/ExampleMap";

const IndexPage = () => {
  // console.log(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <ExampleMap />
    </Layout>
  );
};

export default IndexPage;
