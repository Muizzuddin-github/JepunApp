import Image from "next/image";

const Fasilitas = () => {
  return (
    <section className="px-5 pt-28 pb-40 bg-gray-300">
      <section className="flex flex-col items-center">
        <section className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-wider">
            Fasilitas Unggulan
          </h2>
          <p className="font-bold text-sm text-gray-500 mt-2">
            Semua Yang Anda Butuhkan Ada di Rumah
          </p>
        </section>

        <section className="flex flex-wrap w-3/4 mt-5 justify-around items-center">
          <section className="w-72 mt-14 text-center">
            <section className="mb-1">
              <Image
                src="/living-room.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="font-bold">Ruang Tamu</p>
            <p className="text-sm">
              Ruang tamu nyaman dengan sofa empuk dan nuansa hangat untuk
              bersantai.
            </p>
          </section>
          <section className="w-72 mt-14 text-center">
            <section className="mb-1">
              <Image
                src="/dining-table.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="font-bold">Meja Makan</p>
            <p className="text-sm">
              Meja makan bersih dan luas, cocok untuk makan bersama keluarga.
            </p>
          </section>
          <section className="w-72 mt-14 text-center">
            <section className="mb-1">
              <Image
                src="/room.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="font-bold">Ruang Karaoke</p>
            <p className="text-sm">
              Ruang karaoke lengkap dan nyaman untuk seru-seruan bersama
              keluarga atau teman.
            </p>
          </section>
          <section className="w-72 mt-14 text-center">
            <section className="mb-1">
              <Image
                src="/kitchen.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="font-bold">Dapur Bersih</p>
            <p className="text-sm">
              Dapur bersih dan rapi, siap digunakan untuk memasak kebutuhan
              tamu.
            </p>
          </section>
          <section className="w-72 mt-14 text-center">
            <section className="mb-1">
              <Image
                src="/app.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="font-bold">Spot Foto</p>
            <p className="text-sm">
              Tersedia spot foto estetik untuk abadikan momen liburanmu.
            </p>
          </section>
          <section className="w-72 mt-14 text-center">
            <section className="mb-1">
              <Image
                src="/wifi.png"
                width={80} // ubah sesuai kebutuhan
                height={80} // ubah sesuai kebutuhan
                alt="Living room"
                className="m-auto"
              />
            </section>
            <p className="font-bold">Wifi</p>
            <p className="text-sm">
              WiFi cepat dan stabil untuk mendukung aktivitas online tamu.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Fasilitas;
