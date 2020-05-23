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
      <div className="flex items-center">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 0 32 32"
            width="32"
          >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
        </svg>
        <h3 className="text-3xl mb-3 ml-3 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        </div>
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
