import { Link } from "react-router-dom";
import projects from "../data/projects";
import { Tilt } from "react-tilt";

const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 1, // max tilt rotation (degrees)
    perspective: 100, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function Projects() {
    return (
        <>
            <div className="text-4xl font-bold">
                <h1>Personal</h1>
                <h1 className="text-orange-400">Projects</h1>
            </div>
            <div className="flex justify-between gap-4 my-4 py-4 overflow-x-scroll text-white">
                {projects.map((project, id) => {
                    return (
                        <div key={id} className="min-w-[90%] md:min-w-[50%] lg:min-w-[30%]">
                            <Tilt options={defaultOptions}>
                                <div className="h-96  border rounded-lg overflow-hidden">
                                    <div className="h-[20%] flex justify-center items-center primary-color shadow-none">
                                        <h2 className="text-2xl font-bold text-center">{project.name}</h2>
                                    </div>
                                    <div className="text-black font-medium overflow-y-scroll shadow-none h-[70%] bg-white text-justify p-4 bg-opacity-0">
                                        <img src={project.img} alt="" />
                                    </div>
                                    <Link to={project.link}>
                                        <div className="text-center rounded-t-none btn">see details</div>
                                    </Link>
                                </div>
                            </Tilt>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Projects;
