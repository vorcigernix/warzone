import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, url, slug }) {
  const image = (
    <picture>
      <source srcSet={`${url}?fm=webp&q=80`} />
      <source srcSet={`${url}?fm=jpg&q=90`} />
      <img
        src={url}
        alt={`Cover Image for ${title}`}
        className={cn("shadow-small border-gray-400 rounded-md", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
      />
    </picture>
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
