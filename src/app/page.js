import Image from "next/image";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
export default function Home() {


// to do 
// arrumar o espacamento entre a borda da div da esquerda e os elementos internos 
// add o espaco entre a foto e o nome 
// add o espaco entre o nome e rede sociais 
// entre a rede social e o paragrafo 
// add a imagem(minha foto) dentro do circulo 
// add o link para as redes sociais

  return (
    <> 

      <div className="p-10 h-lvh bg-indigo-900 flex">
        <div className="bg-blue-950 w-1/5 h-full flex flex-col items-center border-r-4 border-e-emerald-200	">
          <div className="rounded-full bg-purple-500 w-40 h-40">
          </div>

          <p className="text-purple-50 ">Luiz Gabriel Gomes</p>
        
          <div className="flex gap-3">
            <BsLinkedin />
            <BsGithub />
            <BsInstagram />
          </div>
          
          <div>
            <p className="text-purple-50">Hi, my name is Luiz Gabriel Gomes and I'm a Front-end Software Engineer. This is my website, be welcome!</p>
          </div>
        
        </div> 

        <div className="bg-blue-950 w-4/5 h-full">
        

        </div>
      </div>
    </>
  )

}
