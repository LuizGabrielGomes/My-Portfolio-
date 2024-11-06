import Image from "next/image";
import photo from "../../public/assets/foto.jpg";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

import Link from "next/link"

export default function Home() {

  return (
    <> 

      <div className="p-10 h-lvh bg-indigo-900 flex">
        <div className="bg-blue-950 w-1/5 h-full flex flex-col items-center border-r-4 border-e-emerald-200	">
          <Image className="rounded-full bg-purple-500 w-40 h-40 mt-20" alt="gabriel's photos" src={photo} /> 

          <p className="text-purple-50 mt-3">Luiz Gabriel Gomes</p>
        
          <div className="flex gap-3 my-6 ">
            <Link href={"https://www.linkedin.com/in/luiz-gabriel-gomes-171b51264/"} target="_blank"><BsLinkedin /></Link>
            <Link href={"https://github.com/LuizGabrielGomes"} target="_blank"><BsGithub /></Link>
            <Link href={"https://www.instagram.com/luizggomes1/"} target="_blank"><BsInstagram /></Link>
          </div>
          
          <div>
            <p className="text-purple-50 mx-6">Hi, my name is Luiz Gabriel Gomes and I'm a Front-end Software Engineer. This is my website, be welcome!</p>
          </div>
        
        </div> 

        <div className="bg-blue-950 w-4/5 h-full">
        

        </div>
      </div>
    </>
  )

}
