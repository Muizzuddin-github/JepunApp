"use client";

import Contact from "@/components/contact"
import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RuangTamu from "@/components/service-fasilitas/ruang-tamu";
import MejaMakan from "@/components/service-fasilitas/meja-makan";


export default function Kontak() {

    return <>
        <Contact />
        <Navbar />
        <Header />
        <RuangTamu />
        <MejaMakan />
        <Footer />
    </>
}
