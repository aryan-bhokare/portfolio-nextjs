import Image from "next/image";
import deved from "../public/aryanpfp1.png";

// let props = {
//     name: "",
// }
const Cards = ({projectimg,projectname, projectinfo,githublink, source}) => {
  return (
    <div>
    <div className='flex items-center justify-center lg:min-h-screen md:min-h-screen px-2'>
        <div className='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden dark:bg-slate-400'>
            <div className='max-w-md mx-auto md:'>
            <Image src={source}></Image>
            <div className='p-4 sm:p-6'>
                <p className='font-bold text-black text-[22px] leading-7 mb-1'>{projectname}</p>
                <div className='flex flex-row'>
                </div>
                <p className='text-[#7C7C80] dark:text-gray-700 font-[15px] mt-6'>{projectinfo}</p>
                <a target='_blank' href={githublink} className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-teal-400 dark:bg-teal-400 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Github
                </a>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cards;
// style='background-image:url(https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6);background-size:cover;background-position:center'