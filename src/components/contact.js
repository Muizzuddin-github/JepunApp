import Image from "next/image";
const Contact = () => {
  return (
    <section className="r p-2 hidden items-center justify-center md:flex">
      <section className="w-[90%] r flex justify-between items-center w">
        <section className="gap-5 hidden lg:flex ">
          <section className="flex items-center gap-2">
            <section className="border border-coklat w-10 h-10 rounded-full flex justify-center items-center">
              <i className="fa-solid fa-location-dot text-xl text-coklat"></i>
            </section>
            <section className="text-coklat text-sm flex flex-col gap-1 font-bold">
              <p>7882 Longbranch Rd</p>
              <p>Wooster, New York</p>
            </section>
          </section>
          <section className="flex items-center gap-2">
            <section className="border border-coklat w-10 h-10 rounded-full flex justify-center items-center">
              <i className="fa-solid fa-envelope text-xl text-coklat"></i>
            </section>
            <section className="text-coklat text-sm flex flex-col gap-1 font-bold">
              <p>Email Us</p>
              <p>ami@example.com</p>
            </section>
          </section>
        </section>

        <section>
          <Image src="/logo.svg" alt="logo" width={38} height={38} className="w-38" />
        </section>

        <section className="items-center gap-10 hidden sm:flex">
          <p className="text-2xl text-coklat font-bold">+(84) 4130 0555</p>
          <button className="py-2 px-5 font-bold bg-coklat rounded text-coklat_muda cursor-pointer hover:coklat_tua">
            Hubungi Kami
          </button>
        </section>
      </section>
    </section>
  );
};

export default Contact;
