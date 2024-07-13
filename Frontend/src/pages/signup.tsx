import Quote from "../components/Qoute";
import { Upinput } from "../components/UpInput";

export default function Signup(){
    return(

        <div className="grid md:grid-cols-2 grid-cols-1 ">
            <div className=" px-27">
                <Upinput />
            </div>
            <div className="invisible md:visible">
                <Quote/>
            </div>
        
        </div>
            
       
    )
}