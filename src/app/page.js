import Contact from "@/components/contact";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Fasilitas from "@/components/fasilitas";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <>
      <Contact />
      <Navbar />
      <Header />
      <Welcome />
      <Fasilitas />
      <Footer />
    </>
  );
}
