import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Experiences from "@/app/components/sections/Experiences";
import Testimonials from "@/app/components/sections/Testimonials";
import Contact from "@/app/components/sections/Contact";

/* SSG */
export default async function Home() {
  // Simulate Fetch data from Api Testing
  // await new Promise(resolve => {
  //   setTimeout(()=> {
  //     console.log("Hello World")
  //     resolve("")
  //   }, 7000)
  // })
  return (
    <>  
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonials />
      <Contact />
    </>
  );
}
