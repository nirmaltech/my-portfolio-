
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaPython, FaReact, FaYoutube } from "react-icons/fa";
import { IoLogoJavascript, IoMdMailOpen } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import myimg from "../../public/myimg.png";
const Home = () => {
    return (
        <>
            <div name="Home"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome To My Page</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello, I am a </h1>
                            <ReactTyped className="text-red-600 font-bold"
                                strings={[ "Front-End Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                            {/*<span className="text-red-600 font-bold">Developer</span> */}
                        </div>
                        <br />
                        <p className="text-sm md:text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero obcaecati vel incidunt expedita eligendi saepe amet ipsum quidem impedit, rem non beatae corporis velit quae quasi quod perspiciatis asperiores nisi voluptatum doloremque? Totam!</p>
                        <br />
                        {/*Social media icons */}
                        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                            <div className=" space-y-2">
                                <h1 className="font-bold ">Available On</h1>
                                <ul className="flex space-x-5">
                                    <li>
                                        <a href="nirmalgangwar7454@gmail.com" target="_blank">
                                        <IoMdMailOpen className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/nirmal-gangwar-840272239" target="_blank">
                                        <BsLinkedin className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://youtube.com/@nirmalkumar5960?si=eQcX7CZn-8fedvX-" target="_blank">
                                        <FaYoutube className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/nirmaltech" target="_blank">
                                        <FaGithub className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <div>
                                <h1 className="font-bold my-2">Currently Working On</h1>
                                <div className="flex space-x-3">
                                    <RiTailwindCssFill className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full border-[2px]" />
                                    <IoLogoJavascript className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full border-[2px]" />
                                    <FaReact className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full border-[2px]" />
                                    <FaPython className="text-xl md:text-3xl hover:scale-100 duration-200 rounded-full border-[2px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-6 order-1">
                    <img src={myimg} 
                    className="rounded-full md:w-450 md:h-450" alt="" />
                    </div>
                    
                </div>
                <button  className="flex ml-14 mt-4 font-semibold" >
                    Download CV
                    <a href="{resume}"></a>
                    </button> 
                <br />
                <br />
                <hr />
            </div>
        </>
    )
}

export default Home