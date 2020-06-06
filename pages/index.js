import dynamic from "next/dynamic";
import Container from "../components/container";
import Navigation from "../components/navigation";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";

const DynamicStories = dynamic(() => import("../components/more-stories"), {
  loading: () => <p>...</p>,
});

const DynamicHero = dynamic(() => import("../components/hero-post"), {
  loading: () => HeroScaffold,
});

const ArchiveLink = dynamic(() => import("../components/archive-link"), {
  loading: () => <p>...</p>,
});

const HeroScaffold = (
  <div className="mb-16 md:mb-20 bg-gray-900">
    <div className="mb-6 md:mb-8 md:seventy overflow-hidden">
      <h1 className="text-white text-6xl">WARZONE</h1>
    </div>
  </div>
);

export default function Index({ preview, allPosts }) {
  const articles = allPosts.filter((post) => !post.type.includes("Video"));
  const heroPost = articles[0];
  const morePosts = allPosts.filter((item) => item !== heroPost);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Warzone Community Portal</title>
        </Head>
        <Navigation />
        {heroPost && (
          <DynamicHero
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        <Container>
          {morePosts.length > 0 && <DynamicStories posts={morePosts} />}
          <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-20 row-gap-20 md:row-gap-32 mb-32">
            <ArchiveLink/>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { preview, allPosts },
  };
}
