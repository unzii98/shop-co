import BrowseByStyle from "./browse/page";
import Casual from "./casual/page";

import Fonts from "./component/fonts";
import Hero from "./component/Hero";

import NewArrivals from "./products/page";





import Sell from "./products/sell";

import Test from "./testi/page";




export default function Home(){
  return(
    <div>
      <Hero/>
      <Fonts/>
      <NewArrivals/>
      <Sell/>
 <BrowseByStyle/>
<Test/>



    </div>
  )
}