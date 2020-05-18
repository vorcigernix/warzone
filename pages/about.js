import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Date from "../components/date";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About us</title>
        </Head>
        <Container>
          <Intro />
          <div className="mb-8 md:mb-16">
            <img
              src="about.jpg"
              alt="Cover Image for about page"
              className="shadow-small border-gray-400 rounded-md"
            />
          </div>
          <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
            <div>
              <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                Who are we
              </h3>
              <div className="mb-4 md:mb-0 text-lg">
                <Date dateString="05/18/2020" />
              </div>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4">
                We are gamers like you. We were looking for a simple portal for
                news about our favorite game and while there is many sites
                covering Warzone, none of them have a clear focus on this game.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Also, we found the sites too busy with ADs and other
                distractions - we simply wanted something better. And this is
                hopefully this portal, aggregating news about Warzone from
                various sources in a clean, responsive design.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                We will keep this site free and independent. We will not accept
                any help from anyone than you - Patreon link is below and we
                are considering other options. For now, the operation costs are
                minimal and we can cover them from our pockets.
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
