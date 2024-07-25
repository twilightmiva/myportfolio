import { Link } from "react-router-dom";
function About() {
  return (
    <div className="flex flex-col mb-8 flex-wrap">
      <div className="flex flex-wrap flex-col items-center">
        <h1 className="font-bold">ABOUT ME</h1>
        <p className="text-red-300 text-4xl">~</p>
      </div>
      <div className="flex justify-evenly flex-wrap">
        <div>
          <h1 className="font-bold ">More about me!</h1>
          <div>
            <p className="font-light">
              I'm <span className="font-medium">Full Stack Web Developer</span>{" "}
              building Websites and Web Application
              <br /> that leads to success of the overall product.Check out some
              of my work
              <br /> in the <span className="font-medium">Projects</span>{" "}
              section.
              <br />
              Feel free to connect with me in Linkedin for useful content
              related to Web
              <br /> Development and Programming.
              <br />
              I'm open to <span className="font-medium">Job</span> opportunities
              where I can contribute,learn and grow.If you
              <br /> have a good opportunity that matches my skills and
              experience then don't <br />
              hesitate to <span className="font-medium">contact</span> me.
            </p>
            <Link to="/contacts"><button className="bg-red-300 mt-2 py-[13px] px-[50px] rounded-tr-3xl rounded-bl-3xl">
              CONTACT
            </button></Link>
          </div>
        </div>
        <div>
          <h1 className="font-bold">My Skills</h1>
          <div className="flex gap-[20px]">
            <p className="py-2 px-5 rounded-md bg-red-50 text-gray-600">HTML</p>
            <p className="py-2 px-5 rounded-md bg-red-50 text-gray-600">Css</p>
            <p className="py-2 px-5 rounded-md bg-red-50 text-gray-600">
              JavaScript
            </p>
            <p className="py-2 px-5 rounded-md bg-red-50 text-gray-600">
              React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
