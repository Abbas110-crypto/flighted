import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Container from "./components/Container/Container";
import CaseStudies from "./components/Case Studies/CaseStudies";
import Footer from '../app/components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import Advisory from './components/Advisory/Advisory';


export default function Home() {
  return (
   <div>
    <Hero />
    <Testimonials />
     <Container /> 
    <CaseStudies />
    <Advisory />  
   </div>
  );
}
