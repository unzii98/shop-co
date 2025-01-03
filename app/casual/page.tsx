
import { AccordionDemo } from "../component/accordion";
import { CheckboxDemo } from "../component/check";
import { DressStyle } from "../component/dress";
import Tshirt from "../component/product";


import Size from "../component/size";
import { SliderDemo } from "./side";


                                                                                                                                                                             
export default function Casual(){
    return(
        <main className="flex  flex-col md:flex-row justify-center items-center space-x-6 py-10 px-21 max-w-7xl mx-auto" >
            {/*left*/}
        <div className=" w-full h-full md:w-[295px] md:h-[1200px] border rounded-[16px] ml-4">
        <AccordionDemo/>
       <SliderDemo/>
       <CheckboxDemo/>
       <Size/>
       <DressStyle/>
      
      </div>
{/*right*/}
         <div className="sm:w-full md:w-[850px] h-full sm:h-[1200px] ">
         <Tshirt/>
        </div>
</main>
        
    )
}