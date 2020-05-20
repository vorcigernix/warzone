import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  const bgSlugPicture = {
    background: `url(${coverImage.url}) no-repeat center/cover`,
    backgroundClip: `text`,
    WebkitBackgroundClip: `text`,
    color: `transparent`,
  };
  return (
    <>
      <div className="h-48" style={bgSlugPicture}>
        <PostTitle>{title}</PostTitle>
      </div>
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
    </>
  );
}
