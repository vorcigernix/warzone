export default function Navigation() {
  return (
    <nav class="flex items-center justify-between flex-wrap px-4 bg-gray-900">
      <div class="flex items-center flex-shrink-0 text-white mr-6 sticky top-0 bg-gray-900">
        <h1>WARZONE</h1>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm text-white lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 mr-4"
          ></a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0  mr-4"
          ></a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0"
          ></a>
        </div>
        <div>
          <a
            href="/about"
            class="inline-block text-sm px-4 py-2 leading-none text-gray-900 bg-white font-bold hover:text-white hover:bg-gray-900 mt-4 lg:mt-0"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
