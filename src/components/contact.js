/* eslint-disable @next/next/no-img-element */
const Contact = () => {
  return (
    <section className="p-5 hidden items-center justify-center md:flex">
      <section className="w-[90%] flex justify-between items-center w">
        <section className="gap-5 hidden lg:flex ">
          <section className="flex items-center gap-2">
            <section className="border w-10 h-10 rounded-full flex justify-center items-center">
              <i className="fa-solid fa-location-dot text-xl text-gray-800"></i>
            </section>
            <section className="text-gray-700 text-sm flex flex-col gap-1 font-bold">
              <p>7882 Longbranch Rd</p>
              <p>Wooster, New York</p>
            </section>
          </section>
          <section className="flex items-center gap-2">
            <section className="border w-10 h-10 rounded-full flex justify-center items-center">
              <i className="fa-solid fa-envelope text-xl text-gray-800"></i>
            </section>
            <section className="text-gray-700 text-sm flex flex-col gap-1 font-bold">
              <p>Email Us</p>
              <p>ami@example.com</p>
            </section>
          </section>
        </section>

        <section>
          <img src="/logo.svg" alt="logo" className="w-48" />
        </section>

        <section className="items-center gap-10 hidden sm:flex">
          <p className="text-2xl font-bold">+(84) 4130 0555</p>
          <button className="py-2 px-5 font-bold bg-blue-700 rounded text-white cursor-pointer hover:bg-blue-800">
            Hubungi Kami
          </button>
        </section>
      </section>
    </section>
  );
};

export default Contact;
