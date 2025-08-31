import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-coklat">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-1"
                alt="FlowBite Logo"
                height={100}
                width={100}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Jepun
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                TENTANG KAMI
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/service-fasilitas" className="hover:underline">
                    Layanan
                  </Link>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Kontak Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                IKUTI KAMI
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    X
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-coklat_muda sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-coklat_muda sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4">
            <a href="#" className="text-coklat_muda hover:text-white">
              <i className="fa-brands fa-instagram text-xl"></i>
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="#" className="text-coklat_muda hover:text-white">
              <i className="fa-brands fa-x-twitter text-xl"></i>
              <span className="sr-only">Twitter page</span>
            </a>

            <a href="#" className="text-coklat_muda hover:text-white">
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span className="sr-only">Whatsapp page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
