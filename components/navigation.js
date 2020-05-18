export default function Navigation() {
  return (
    <nav class="flex items-center justify-between flex-wrap p-6 bg-gray-900 mb-2 mt-2 rounded-md">
      <div class="flex items-center flex-shrink-0 text-white mr-6 ">
      <h1>WARZONE</h1>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm text-white lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            News
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            Articles
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0"
          >
            Videos
          </a>
        </div>
        <div>
          <a
            href="/about"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
