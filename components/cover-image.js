import Link from "next/link";

export default function CoverImage({url, slug }) {
  const bgPicture = {
    background: `url(${url}?w=600&fm=webp&q=80) no-repeat center/cover`,
  };
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className="-mx-5 sm:mx-0 h-64" style={bgPicture} />
    </Link>
  );
}
