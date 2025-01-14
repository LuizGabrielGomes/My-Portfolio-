import Image from "next/image";
import photo from "../../public/assets/foto.jpg";
import banner from "../../public/assets/banner.png";
import { BsLinkedin, BsGithub, BsInstagram, BsLink45Deg } from "react-icons/bs";
import Link from "next/link"
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";

export default function Home() {

// ajustar o tamanho da imagem 



  return (
    <> 

      <div className="p-10 min-h-lvh bg-indigo-900 block sm:flex">
        <div className="bg-blue-950 w-full min-h-full flex flex-col items-center border-b-4 sm:border-b-0 border-emerald-400 sm:border-r-4 border-b-0 sm:w-1/5">
          <Image className="rounded-full bg-purple-500 w-40 h-40 mt-20" alt="gabriel's photos" src={photo} /> 

          <p className="text-purple-50 mt-3">Luiz Gabriel Gomes</p>
        
          <div className="flex gap-3 my-6">
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

          <div  className="m-2 border-2 border-emerald-400 flex gap-4" >
            <div className="flex justify-around flex-col">
                <Image className="w-45 h-55" src={banner} alt="" />
            </div>

            <div>
              <p>             
                Application of Multiple-Choice Questions in English
              </p>

              <p>
                The project features interactive buttons with animations when hovering over them, as well as an extended clickable area that allows functionalities to be accessed by clicking anywhere on the bar, making navigation easier. It includes fully functional links, a dynamic design with animations for a more engaging experience, and quick, streamlined access to login and sign-up options, ensuring usability and efficiency.
              </p>

              <div className="flex gap-1 my-3">
                <FaHtml5 />
                <IoLogoCss3 />
                <IoLogoJavascript />
              </div>
              
              <div className="flex gap-1 my-4">
                <Link href={"https://project-react-english.vercel.app/"} target="_blank"><BsLink45Deg /></Link>
                <Link href={"https://github.com/LuizGabrielGomes/project_react_english"} target="_blank"><BsGithub /></Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )

}