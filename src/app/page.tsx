import Collaborate from "@/components/Blogs";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Vision from "@/components/MissionVision";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <>
            <Header />
            <Projects />
            <Vision />
            <Collaborate />
            <Contact />
        </>
    );
}
