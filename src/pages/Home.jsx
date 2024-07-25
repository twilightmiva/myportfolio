import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
function Home() {
  return (
    <div className="w-[100%] flex flex-col flex-wrap">
      
      <Hero />
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}
export default Home;
