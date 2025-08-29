import Image from "next/image";
import { useState } from "react";



const images = [
    "/RuangTamu/1.jpeg",
    "/RuangTamu/2.jpeg",
    "/RuangTamu/3.jpeg",
    "/RuangTamu/4.jpeg",
    "/RuangTamu/5.jpeg",
];

const RuangTamu = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrent(index);
    };

    return (
        <section className="p-1 md:p-4   flex items-center">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                {/* Left Section (Text) */}
                <section className="p-6 flex flex-col justify-center ">
                    <h5
                        className={`nicolas font-bold text-lg md:text-xl mb-4`}
                    >
                        Layanan & Fasilitas
                    </h5>

                    <section className="p-4 rounded-lg">
                        <h1
                            className={`teramo font-bold text-2xl md:text-3xl`}
                        >
                            Guest Home Jepun
                        </h1>
                        <h1
                            className={`teramo font-bold text-2xl md:text-3xl`}
                        >
                            Ruang Tamu
                        </h1>

                        <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                            minus itaque assumenda aut velit. Optio laboriosam deleniti vero
                            voluptatem eos debitis vitae voluptates adipisci assumenda! Vero
                            illum iure voluptate nulla!
                        </p>

                        <button
                            type="button"
                            className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm md:text-base px-5 py-2.5 inline-flex items-center"
                        >
                            Choose plan
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
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
                        </button>
                    </section>
                </section>

                {/* Right Section (Carousel) */}
                <section className="relative  overflow-hidden ">
                    {/* Wrapper */}
                    <div className="relative aspect-video md:aspect-full md:h-full">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <Image
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-3 md:bottom-5 left-1/2 space-x-2 md:space-x-3">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                                    }`}
                            ></button>
                        ))}
                    </div>

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 md:px-4"
                    >
                        <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/50">
                            <svg
                                className="w-3 h-3 md:w-4 md:h-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                        </span>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 md:px-4"
                    >
                        <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/50">
                            <svg
                                className="w-3 h-3 md:w-4 md:h-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </span>
                    </button>
                </section>
            </section>
        </section>
    );
};

export default RuangTamu;
