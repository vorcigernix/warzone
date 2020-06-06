import PostPreview from "../components/post-preview";
import VideoPreview from "../components/video-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-5xl tracking-tighter leading-tight text-gray-600">
        Even More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-20 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) =>
          post.type.includes("Video") ? RenderVideo(post) : RenderArticle(post)
        )}
      </div>
    </section>
  );
}
function RenderVideo(video) {
  return (
    <VideoPreview
      key={video.slug}
      title={video.title}
      youtubeID={video.youtube}
      date={video.date}
      excerpt={video.excerpt}
    />
  );
}
function RenderArticle(article) {
  return (
    <PostPreview
      key={article.slug}
      title={article.title}
      coverImage={article.coverImage}
      date={article.date}
      author={article.author}
      slug={article.slug}
      excerpt={article.excerpt}
    />
  );
}
