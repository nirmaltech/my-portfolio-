import html from "../../public/html.png"
import javascript from "../../public/javascript.png"
import next from "../../public/next.png"
import python from "../../public/python.png"
import React from "../../public/reactjs.png"
import sql from "../../public/sql.jpg"


const Skills = () => {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "html"
        },
        {
            id: 2,
            logo: javascript,
            name: "javascript"
        },
        
        {
            id: 3,
            logo: React,
            name: "reactjs"
        },
        {
            id: 4,
            logo: next,
            name: "next"
        },
        {
            id: 5,
            logo: python,
            name: "python"
        },
        {
            id: 6,
            logo: sql,
            name: "sql"
        }
    ]
    return (
        <div>
        <div name="Skills"
         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div className="text-3xl font-bold mb-5">Skills</div>
            <p className="mb-2">I have more than 1 year of experiance in below technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {cardItem.map(({ id, logo, name }) => (
                    <div className="flex flex-col items-center justify-center  border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-90 duration-200"
                        key={id}>
                        <img
                            src={logo}
                            className="w-[120px]  rounded-full" 
                            alt="" />
                        <div>
                            <div className="">{name}</div>
                            
                            </div>
                        
                    </div>
                ))}

            </div>
        </div>
        </div>
    )
}

export default Skills;