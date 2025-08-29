"use client";
import Image from "next/image";
import { useState } from "react";



const images = [
    "/RuangTamu/1.jpeg",
    "/RuangTamu/2.jpeg",
    "/RuangTamu/3.jpeg",
    "/RuangTamu/4.jpeg",
    "/RuangTamu/5.jpeg",
];
const OurHome = () => {
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
        <>
            <section className="border-2 border-black-400">
                <section className="w-full border-2 border-amber-400  px-14 pr-5 py-10 h-fit">
                    <section className="p-2 text-center ">
                        <h2 className=" nicolas font-semibold text-4xl">A cozy place to rest, just like home</h2>
                        <p className=" teramo p-2 text-xl font-medium">Our Home</p>
                        <hr className="  m-auto w-40 h-1 rounded-2xl bg-black " />
                    </section>
                </section>
                <section>
                    <section className=" w-2/3 m-auto grid grid-cols-1 md:grid-cols-2 gap-15 p-4  border-2 border-amber-500">
                        <div className="bg-gray-800 border-3 border-red-600 rounded-lg shadow-sm ">
                            {/* Right Section (Carousel) */}
                            <section className="relative   rounded-lg overflow-hidden">
                                {/* Wrapper */}
                                <div className="relative h-56 md:h-96">
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
                                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                                                }`}
                                        ></button>
                                    ))}
                                </div>

                                {/* Prev Button */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4"
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
                                        <svg
                                            className="w-4 h-4 text-white"
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
                                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
                                        <svg
                                            className="w-4 h-4 text-white"
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

                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="bg-gray-800 border-3 border-red-600 rounded-lg shadow-sm ">
                            {/* Right Section (Carousel) */}
                            <section className="relative   rounded-lg overflow-hidden">
                                {/* Wrapper */}
                                <div className="relative h-56 md:h-96">
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
                                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                                                }`}
                                        ></button>
                                    ))}
                                </div>

                                {/* Prev Button */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4"
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
                                        <svg
                                            className="w-4 h-4 text-white"
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
                                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
                                        <svg
                                            className="w-4 h-4 text-white"
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

                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </section>


                </section>
            </section>
        </>
    );
}

export default OurHome;