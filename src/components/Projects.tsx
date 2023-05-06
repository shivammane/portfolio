import { Link } from "react-router-dom";
import projects from "../data/projects";

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
                        <div key={id} className="h-96 min-w-[90%] md:min-w-[50%] lg:min-w-[30%] border rounded-lg overflow-hidden">
                            <div className="h-[20%] flex justify-center items-center primary-color shadow-none">
                                <h2 className="text-2xl font-bold text-center">{project.name}</h2>
                            </div>
                            <div className="text-black font-medium overflow-y-scroll shadow-none h-[70%] bg-white text-justify p-4 bg-opacity-0">
                                {project.summary}
                            </div>
                            <Link to={project.link}>
                                <div className="text-center rounded-t-none btn">see details</div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Projects;
