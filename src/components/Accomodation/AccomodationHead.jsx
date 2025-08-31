const Gambar = "/RuangTamu/1.jpeg";

const AccomodationHead = () => {
  return (
    <section className=" bg-cover h-[40vh] lg:h-[55vh] bg-center bg-no-repeat bg-[url('/Accomodation/538117500.jpg')] bg-black/50  bg-blend-multiply content-center">
      <div
        // data-aos-duration="1500"
        className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56"
      >
        <h1 className="nicolas mb-4 md:text-[52px]  text-[32px] font-extrabold tracking-tight leading-none text-white   drop-shadow-lg">
          Accomodation
        </h1>
        <p className="teramo mb-8 md:text-[18px] text-[14px] text-white sm:px-16 lg:px-48 drop-shadow-md ">
          Kami menyediakan berbagai tipe kamar dengan suasana yang homey dan
          tenang, cocok untuk istirahat, liburan, maupun perjalanan bisnis.
        </p>
        <hr className="h-0.5 w-28 bg-white rounded-full m-auto text-white" />
      </div>
    </section>
  );
};
export default AccomodationHead;
