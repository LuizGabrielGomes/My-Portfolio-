import Image from "next/image";
import photo from "../../public/assets/foto.jpg";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import Link from "next/link"


// secao de conteudo(direita)  
// adicionar titulo 
// adicionar secao about me: titulo da secao e paragrafo e breve descricao sobre mim 
// adicionar secao hard skills: titulo da secao e lista com habilidades tecnicas 
// html css javascript react next tailwind 

// adicionar soft skill: titulo da secao e lista de habilidades comportamentais 

// adicionar secao my project: imgagem do projeto de ingles e breve paragrafo explicando o projeto  







export default function Home() {

  return (
    <> 

      <div className="p-10 min-h-lvh bg-indigo-900 block sm:flex">
        <div className="bg-blue-950 w-full min-h-full flex flex-col items-center border-b-4 border-emerald-200 sm:border-r-4 border-b-0 sm:w-1/5">
          <Image className="rounded-full bg-purple-500 w-40 h-40 mt-20" alt="gabriel's photos" src={photo} /> 

          <p className="text-purple-50 mt-3">Luiz Gabriel Gomes</p>
        
          <div className="flex gap-3 my-6 ">
            <Link href={"https://www.linkedin.com/in/luiz-gabriel-gomes-171b51264/"} target="_blank"><BsLinkedin /></Link>
            <Link href={"https://github.com/LuizGabrielGomes"} target="_blank"><BsGithub /></Link>
            <Link href={"https://www.instagram.com/luizggomes1/"} target="_blank"><BsInstagram /></Link>
          </div>
          
          <div>
            <p className="text-purple-50 mx-6 mb-8 ">Hi, my name is Luiz Gabriel Gomes and I am a Front-end Software Engineer. This is my website, be welcome!</p>
          </div>
        
        </div> 

        <div className="bg-blue-950 w-full h-full p-10 overflow-auto sm:w-4/5">

          <h1 className="text-lime-100 flex justify-center text-4xl font-black mb-20"> My Curriculum </h1>
          <h2 className="text-lime-100 text-2xl font-black">About me</h2>
          <br></br>
          
          <h3>Trilingual professional with Italian and Brazilian citizenship
          <br></br>
          Currently studying web development with HTML, CSS, Javascript and React.
          <br></br>
          Driver license: Italian Driver’s License</h3>
          <br></br>
          
          <h2 className="text-lime-100 text-2xl font-black">Hard skills</h2>
          <br></br>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind</li>
          <br></br>
          
          <h2 className="text-lime-100 text-2xl font-black">Soft skills</h2>
          <br></br>
          <li>Enthusiastic</li>
          <li>Quick Learner</li>
          <li>Excellent Communication Skills</li>
          <li>Team Player</li>

        </div>
      </div>
    </>
  )

}


// display: flex;
//     justify-content: center;