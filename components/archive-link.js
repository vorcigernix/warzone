import Link from "next/link";

export default function ArchiveLink() {
  return (
    <div className="px-6 py-4 mb-10 flex justify-center">
      <div className="flex items-center">

        <h3 className="text-3xl mb-3 ml-3 leading-snug text-white">
          <Link href="/archive">
            <a className="hover:underline">Even More Stories</a>
          </Link>
        </h3>
      </div>
    </div>
  );
}
