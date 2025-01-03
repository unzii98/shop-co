import Image from "next/image"

export default function Hero(){
  return(
    <main className="w-full h-full  md:h-[386px] flex flex-col md:flex-row justify-start items-start bg-[#F2F0F1] ">
    {/*left*/}
    <div className=" relative md:w-[500px] mt-3 md:mt-5 md:ml-10 pl-3 ">
      <h1 className=" text-2xl  md:text-5xl font-extrabold mt-20">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className="text-sm md:mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <button className="bg-black mt-3 py-2 px-8 text-sm text-white rounded-[16px]">Shop now</button>
    </div>
    {/*right*/}
    <div className="relative mt-[90px] px-12">
      <Image src={"/Rectangle1.png"} className="w-[260px] mr-23" alt=" profile" width={200}height={200}></Image>
     
     
     {/*star*/}
    
     <Image src={"/star2.png"} className=" w-[50px] md:w-[70px] absolute top-[0px] md:top-[50px] right-[0] md:right-[20px]" alt=" profile"  width={100}height={200}></Image>
     <Image src={"/star.png"} className=" w-[20px] md:w-[60px] absolute top-[50px] md:top-[70px] left-[50px] md:left-[20px]" alt=" profile"  width={100}height={200}></Image>
    
    
    </div>
    </main>
  )
}
