import Link from "next/link";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="overflow-hidden bg-accent-1 shadow-small border-gray-400 hover:shadow-medium transition-shadow duration-200">
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="px-6 py-4">
        <h3 className="text-3xl mb-3 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={author.picture.url}
            alt={author.name}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{author.name}</p>
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
