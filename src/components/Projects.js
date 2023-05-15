import React from "react";
import Project from "../assets/project.jpg"

const Projects = () => {
    return(
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                {/* first card */}
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Project} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Project-1</h2>
                    <p className="text-center text-4xl font-bold">This test</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <p className="py-2 border-b mx-8">More</p>
                        <p className="py-2 border-b mx-8">Details</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Check it out!</button>
                </div>
                 {/* secend card */}
                 <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Project} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Project-1</h2>
                    <p className="text-center text-4xl font-bold">This test</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <p className="py-2 border-b mx-8">More</p>
                        <p className="py-2 border-b mx-8">Details</p>
                    </div>
                    <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Check it out!</button>
                </div>
                 {/* third card */}
                 <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Project} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Project-1</h2>
                    <p className="text-center text-4xl font-bold">This test</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <p className="py-2 border-b mx-8">More</p>
                        <p className="py-2 border-b mx-8">Details</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Check it out!</button>
                </div>


            </div>
        </div>
    )
}

export default Projects;