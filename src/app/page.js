import Image from "next/image";
import { BsLinkedin, BsGithub } from "react-icons/bs";
export default function Home() {

// embaixo do nome as redes sociais //
// embaixo das redes sociais uma breve descricao

  return (
    <> 

      <div className="p-10 h-lvh bg-indigo-900 flex">
        <div className="bg-blue-950 w-1/5 h-full flex flex-col items-center border-r-4 border-e-emerald-200	">
          <div className="rounded-full bg-purple-500 w-40 h-40">
          </div>

          <p className="text-purple-50 ">Luiz Gabriel Gomes</p>
        
          <div>
            <BsLinkedin />
            <BsGithub />
          </div>
          
          <div>
            <p>Hi, my name is Luiz Gabriel Gomes and I'm a Front-end Software Engineer. This is my website, be welcome!</p>
          </div>
        
        </div> 

        <div className="bg-blue-950 w-4/5 h-full">
        

        </div>
      </div>
    </>
  )

}
