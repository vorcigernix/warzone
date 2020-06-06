import Link from "next/link";

export default function ArchiveLink() {
  return (
    <div className="overflow-hidden shadow-small border-gray-100 hover:shadow-medium transition-shadow duration-200">
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
            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
          </svg>
          <h3 className="text-3xl mb-3 ml-3 leading-snug text-white">
            <Link href="/archive">
                <a className="hover:underline">Even More Stories</a>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
