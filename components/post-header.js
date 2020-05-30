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
      <div className="my-10" style={bgSlugPicture}>
        <PostTitle>{title}</PostTitle>
      </div>
      <div className="flex items-center ">
        <div className=" bg-gray-600 py-2 px-3 ">
          <p className="text-gray-900 leading-none font-bold uppercase">{author.name}</p>
          <p className="text-gray-900 text-xs">{date}</p>
        </div>
      </div>
    </>
  );
}
