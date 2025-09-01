import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <section className="h-[50vh] lg:h-[65vh] relative">
      <Image
        src="/LandingPage/NDA_7431.jpg"
        fill
        alt="Living room"
        className="m-auto bg-cover bg-center object-cover  "
      />
      <div className="absolute inset-0 bg-black/50" />
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        // data-aos-duration="1500"
        className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56"
      >
        <h1 className="nicolas mb-4 md:text-[52px]  text-[32px] font-extrabold tracking-tight leading-none text-white   drop-shadow-lg">
          Guest House Pondok Jepun
        </h1>
        <p className="teramo mb-8 md:text-[18px] text-[14px] text-white sm:px-16 lg:px-48 drop-shadow-md ">
          Tempat nyaman dan tenang, cocok untuk liburan atau perjalanan bisnis.
          Lokasi strategis, fasilitas lengkap, dan suasana seperti di rumah
          sendiri.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 px-5">
          <Link
            href="/accomodation"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-coklat_muda rounded-md bg-coklat hover:bg-coklat_tua "
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
