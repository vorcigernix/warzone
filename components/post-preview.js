import Link from "next/link";
import CoverImage from "./cover-image";
import { formatRelative } from "date-fns";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="overflow-hidden transition duration-500 ease-in-out bg-gray-800 hover:bg-black  shadow-small">
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="px-6 py-4">
      <div className="flex items-center">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-gray-700 fill-current"
          >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
        </svg>
        <h3 className="text-3xl mb-3 ml-3 leading-snug text-white">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        </div>
        <p className="text-lg leading-relaxed mb-4 text-gray-200 ">{excerpt}</p>
        <div className="flex items-center">
          <img
            className="w-10 h-10  mr-4"
            src={author.picture.url}
            alt={author.name}
          />
          <div className="text-sm">
            <p className="text-gray-500 font-extrabold leading-none">{author.name}</p>
            <p className="text-gray-500">
              {formatRelative(new Date(date), new Date())}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
