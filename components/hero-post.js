import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-16 md:mb-20">
        <div className="mb-6 md:mb-8 md:seventy overflow-hidden">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <picture>
            <source
                media="(min-width: 1200px)"
                srcSet={`${coverImage.url}?w=1240&fm=webp&q=80`}
              />
              <source
                media="(min-width: 1200px)"
                srcSet={`${coverImage.url}?w=1240&fm=jpg&q=90`}
              />
              <source
                media="(min-width: 800px)"
                srcSet={`${coverImage.url}?w=800&fm=webp&q=80`}
              />
              <source
                media="(min-width: 800px)"
                srcSet={`${coverImage.url}?w=800&fm=jpg&q=90`}
              />
              <source
                media="(max-width: 799px)"
                srcSet={`${coverImage.url}?w=400&fm=webp&q=80`}
              />
              <source
                media="(max-width: 799px)"
                srcSet={`${coverImage.url}?w=400&fm=jpg&q=90`}
              />
              <img
                src={coverImage.url}
                alt={`Cover Image`}
                className="w-screen"
                loading="lazy"
              />
            </picture>
          </Link>
        </div>
        <div className="px-6 py-4 bg-white md:bg-opacity-75">
          <h2 className="text-3xl md:text-4xl tracking-tighter  mb-3 leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h2>
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
    </section>
  );
}
