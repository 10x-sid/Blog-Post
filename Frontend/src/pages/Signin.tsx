import { INinput } from "../components/INinput";
import Quote from "../components/Qoute";

export default function Signin(){
    return(<div className="grid md:grid-cols-2 grid-cols-1">
    
    
        <div className="px-27">
            <INinput></INinput>
        </div>
        <div className="invisible md:visible">
            <Quote/>
        </div>

    </div>)
}