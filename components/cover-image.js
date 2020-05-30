import Link from "next/link";

export default function CoverImage({ url, slug }) {
  return (
    <div className="md:h-64 overflow-hidden">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <picture>
          <source media="(min-width: 800px)" srcSet={`${url}?w=800&fm=webp&q=80`} />
          <source media="(min-width: 800px)" srcSet={`${url}?w=800&fm=jpg&q=90`} />
          <source media="(max-width: 799px)" srcSet={`${url}?w=400&fm=webp&q=80`} />
          <source media="(max-width: 799px)" srcSet={`${url}?w=400&fm=jpg&q=90`} />
          <img
            src={url}
            alt={`Cover Image`}
            className="w-screen"
            loading="lazy"
          />
        </picture>
      </Link>
    </div>
  );
}
