import { INinput } from "../components/INinput";
import Quote from "../components/Qoute";

export default function Signin(){
    return(<div className="md:flex">
    
    
        <div className="md:w-1/2 ">
            <INinput></INinput>
        </div>
        <div className="invisible md:visible">
            <Quote/>
        </div>

    </div>)
}