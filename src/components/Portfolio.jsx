
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"
const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            logo: javascript,
            name: "JavaScript"
        },
        {
            id: 2,
            logo: reactjs,
            name: "ReactJS"
        }
    ]
    return (
        
        <div name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div className="text-3xl font-bold mb-5">Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {cardItem.map(({ id, logo, name }) => (
                    <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg p-1 cursor-pointer shadow-md hover:scale-90 duration-200"
                        key={id}>
                        <img
                            src={logo}
                            className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" 
                            alt="" />
                        <div>
                            <div className="px-2 font-bold text-xl mb-2">{name}</div>
                            <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dignissimos.</p>
                        </div>
                        <div className="px-4 py-2 space-x-3 justify-around">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                                Source Code
                            </button>
                           
                        </div>
                    </div>
                ))}

            </div>
        </div>
        
    )
}

export default Portfolio;