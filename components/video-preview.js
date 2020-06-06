import Link from "next/link";

export default function VideoPreview({ title, date, excerpt, youtubeID }) {
  return (
    <div className="overflow-hidden ytred shadow-small border-gray-100 hover:shadow-medium transition-shadow duration-200">
      <div className="md:mb-5">
      <div className="md:h-64 overflow-hidden">
      <Link as={`//www.youtube.com/watch?v=${youtubeID}`}
              href="//www.youtube.com/watch?v=[youtubeID]" prefetch={false}>
        <picture>
          <source srcSet={`https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`} />
          <source srcSet={`https://i.ytimg.com/vi_webp/${youtubeID}/hqdefault.webp`} />
          <img
            src={`https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`} 
            alt={`Cover Image`}
            className="w-screen"
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
            className="fill-current text-white"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <h3 className="text-3xl mb-3 ml-3 leading-snug">
            <Link
              as={`//www.youtube.com/watch?v=${youtubeID}`}
              href="//www.youtube.com/watch?v=[youtubeID]"
              prefetch={false}
            >
              <a target="wartube" className="hover:underline text-white">
                {title}
              </a>
            </Link>
          </h3>
        </div>
        <p className="text-lg leading-relaxed mb-4 text-gray-200">{excerpt}</p>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
