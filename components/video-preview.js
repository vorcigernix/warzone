import Link from "next/link";

export default function VideoPreview({ title, date, excerpt, youtubeID }) {
  return (
    <div className="overflow-hidden bg-accent-1 shadow-small border-gray-400 hover:shadow-medium transition-shadow duration-200">
      <div className="mb-5">
      <div className="h-64 overflow-hidden ">
      <Link as={`https://www.youtube.com/watch?v=${youtubeID}`}
              href="https://www.youtube.com/watch?v=[youtubeID]">
        <picture>
          <source srcSet={`https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`} />
          <source srcSet={`https://i.ytimg.com/vi_webp/${youtubeID}/hqdefault.webp`} />
          <img
            src={`https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`} 
            alt={`Cover Image`}
            className="w-full"
            loading="lazy"
          />
        </picture>
      </Link>
    </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 0 32 32"
            width="32"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <h3 className="text-3xl mb-3 ml-3 leading-snug">
            <Link
              as={`https://www.youtube.com/watch?v=${youtubeID}`}
              href="https://www.youtube.com/watch?v=[youtubeID]"
            >
              <a target="wartube" className="hover:underline">
                {title}
              </a>
            </Link>
          </h3>
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
