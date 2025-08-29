import Link from "next/link";

const Header = () => {
  return (
    <section className="bg-cover h-[50vh] md:h-[85vh] bg-center bg-no-repeat bg-[url('/house.jpeg')] bg-black/50  bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="nicolas mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl drop-shadow-lg">
          Guest House Pondok Jepun
        </h1>
        <p className="teramo mb-8 text-lg text-gray-300 lg:text-xl sm:px-16 lg:px-48 drop-shadow-md font-semibold">
          Tempat nyaman dan tenang, cocok untuk liburan atau perjalanan bisnis.
          Lokasi strategis, fasilitas lengkap, dan suasana seperti di rumah
          sendiri.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 px-5">
          <Link
            href="/"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 "
          >
            Jelajahi Sekarang
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
