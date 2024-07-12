import Quote from "../components/Qoute";
import { Upinput } from "../components/UpInput";

export default function Signup(){
    return(

        <div className="lg:flex ">
            <div className="lg:w-1/2 lg:h-screen px-27">
                <Upinput />
            </div>
            <div className="invisible lg:visible w-1/2 h-screen">
                <Quote/>
            </div>
        
        </div>
            
       
    )
}