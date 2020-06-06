import dynamic from "next/dynamic";
import Container from "../components/container";
import Navigation from "../components/navigation";
import Layout from "../components/layout";
import { getAllPostsForArchive } from "../lib/api";
import Head from "next/head";

const DynamicArchive = dynamic(() => import("../components/archive-stories"), {
  loading: () => <p>...</p>,
});

export default function Archive({ preview, allPosts }) {
  const articles = allPosts.filter((post) => !post.type.includes("Video"));
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Warzone Community Portal</title>
        </Head>
        <Navigation />
        <Container>
          {articles.length > 0 && <DynamicArchive posts={articles} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForArchive(preview);
  return {
    props: { preview, allPosts },
  };
}
