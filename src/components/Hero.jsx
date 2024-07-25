import { Link } from "react-router-dom"
function Hero(){
    return(
        <div className="my-10 w-[70%]  py-10 bg-red-50  block mx-auto  gap-60  ">
        
            <div className="flex flex-wrap justify-center gap-[500px]"> 
<div className="items-center flex flex-col justify-center">
                <h1 className="font-extrabold text-2xl">HEY,I'M MERCY NYAMBURA</h1>
                <p>I'm a Full Stack Web Developer </p>
               <Link to="/projects"><button className="bg-red-300 py-[13px] px-[50px] rounded-tr-3xl rounded-bl-3xl">PROJECTS</button></Link>
               </div>
<img src="src/assets/images/tripnavigator.png" className="w-[250px] h-[300px] rounded-full" alt="" />
            </div>
        </div>
    )
}
export default Hero