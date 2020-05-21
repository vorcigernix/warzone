import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Navigation from '../components/navigation'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

export default function Index({ preview, allPosts }) {
  const articles = allPosts.filter(post=> !post.type.includes('Video'))
  const heroPost = articles[0]
  const morePosts = allPosts.filter(item => item !== heroPost)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Warzone Community Portal</title>
        </Head>
        <Navigation/>
        {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, allPosts },
  }
}
