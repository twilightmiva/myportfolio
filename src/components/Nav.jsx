import { Link } from "react-router-dom"
function Nav(){
    return(
        
        <div className="flex flex-wrap justify-around h-[50px] bg-red-300 items-center ">
            <div>
            <Link to="/"> <h1 className="text-sm">MERCY NYAMBURA</h1></Link>
            </div>
         <ul className="flex flex-wrap gap-[50px] text-sm ">
        <Link to="/"><li>HOME</li></Link>
        <Link to="/about"><li>ABOUT</li></Link>
        <Link to="/projects"><li>PROJECTS</li></Link>
        <Link to="/contacts"><li>CONTACT</li></Link>
            </ul>   
        </div>
    )
}
export default Nav