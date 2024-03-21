import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Container from "./components/Container/Container";
import CaseStudies from "./components/Case Studies/CaseStudies";
import Teams from './components/Teams/Teams';
import Footer from '../app/components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';


export default function Home() {
  return (
   <div>
    <Hero />
    <Testimonials />
    <Container />
    <CaseStudies />
    <Teams />
   </div>
  );
}
