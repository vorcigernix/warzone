import Link from "next/link";
import Avatar from "../components/avatar";
import Date from "../components/date";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const bgPicture = {
    background: `url(${coverImage.url}) no-repeat center/cover fixed`,
  };
  return (
    <section>
      <div
        className="overflow-hidden mb-16 md:mb-20 bg-accent-1 border-gray-400"
        style={bgPicture}
      >
        <div className="mb-6 md:mb-8 h-64">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <div className="-mx-5 sm:mx-0" />
          </Link>
        </div>
        <div className="px-6 py-4 bg-white bg-opacity-75">
          <h2 className="text-3xl md:text-4xl tracking-tighter  mb-3 leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h2>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src={author.picture.url}
              alt={author.name}
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">{author.name}</p>
              <p class="text-gray-600">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
