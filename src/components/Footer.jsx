import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
function Footer(){
    return(
        <div className="bg-black flex  justify-around">

        <div className="text-red-200 text-sm">
<h1>MERCY NYAMBURA</h1>
<p>Full Stack Web Developer building successful<br/> Websites and Web Application</p>
        </div>
        <div className="text-red-200 text-sm">
            <h1>SOCIALS</h1>
            <div className="flex gap-2">
            <FaSquareWhatsapp />
            <FaLinkedin />
            <FaInstagramSquare />
            </div>
        </div>
        </div>

    )
}
export default Footer