import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <section className="mb-40">
      <section className="flex justify-center flex-wrap md:flex-nowrap w-full md:w-4/5 m-auto px-10 md:px-0">
        <section className="w-full flex justify-end py-10 md:py-0">
          <section className="bg-[url('/house.jpeg')] w-full bg-cover bg-no-repeat bg-center h-[40rem] -top-10 relative hidden md:block">
            <Image
              src="/kamarwelcome.jpg"
              width={300} // ubah sesuai kebutuhan
              height={500} // ubah sesuai kebutuhan
              alt="Living room"
              className="absolute -bottom-[9.5rem] right-0 h-[18rem]"
            />
          </section>

          <section className="flex flex-wrap gap-5 md:hidden">
            <Image
              src="/kamarwelcome.jpg"
              width={800} // ubah sesuai kebutuhan
              height={800} // ubah sesuai kebutuhan
              alt="Living room"
              className="m-auto"
            />
            <Image
              src="/kamarwelcome2.jpg"
              width={800} // ubah sesuai kebutuhan
              height={800} // ubah sesuai kebutuhan
              alt="Living room"
              className="m-auto"
            />
          </section>
        </section>

        <section className="w-full bg-gray-300 px-14 pr-5 py-10 h-fit">
          <section>
            <h2 className="font-semibold text-4xl">Selamat Datang</h2>
            <p className="font-medium tracking-wider text-lg mt-4">
              Tentang Kami
            </p>
          </section>

          <section className="mt-16">
            <p className="font-medium text-xl leading-7">
              Pondok Jepun, Nyaman Seperti di Rumah Sendiri Strategis, Tenang,
              dan Dekat ke Semua Destinasi
            </p>

            <p className="font-semibold text-base leading-7 mt-14">
              Nikmati pengalaman menginap yang nyaman dan tenang di Guest House
              Pondok Jepun, sebuah penginapan bergaya homy yang terletak
              strategis di jantung kota Banyuwangi. Dikelilingi oleh pesona alam
              dan kemudahan akses ke berbagai destinasi wisata populer, Pondok
              Jepun menjadi pilihan ideal untuk liburan santai maupun perjalanan
              bisnis Anda.
            </p>

            <section className="mt-16 flex flex-col gap-10 justify-center items-start">
              <section className="flex items-center gap-3 w-fit">
                <section className="w-7 bg-green-600 h-7 text-white rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-check text-sm"></i>
                </section>

                <p className="text-base font-medium">
                  Menyuguhkan kamar yang nyaman, bersih, dan menenangkan.
                </p>
              </section>
              <section className="flex items-center gap-3 w-fit">
                <section className="w-7 bg-green-600 h-7 text-white rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-check text-sm"></i>
                </section>

                <p className="text-base font-medium">
                  Kamar utama nyaman dengan AC, TV, dan water heater.
                </p>
              </section>
            </section>

            <Link
              href="/"
              className="mt-16 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 "
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
          </section>
        </section>
      </section>
    </section>
  );
};

export default Welcome;
