import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Intro() {
    return (
        <>
            <div className="md:flex">
                <div className="md:w-1/2 space-y-4">
                    <div className="text-4xl font-bold">
                        <h1 className="">Hi! I'm</h1>
                        <h1 className="text-orange-400">Shivam Mane</h1>
                    </div>
                    <p className="font-medium text-justify">
                        Lorem, ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ad laudantium porro eaque neque nemo vitae ipsum
                        facere nihil molestias a aperiam, at dicta labore architecto iste soluta, ullam vero. nostrum magni, minus velit facere
                        similique debitis.
                    </p>
                    <a href="mailto:shivamsub8411@gmail.com" className="btn inline-block">
                        Hire Me
                    </a>
                    <div className="">
                        email :
                        <a href="mailto:shivamsub8411@gmail.com" className="font-medium text-purple-900">
                            {" "}
                            shivamsub8411@gmail.com
                        </a>
                    </div>
                    <div className="flex justify-around text-purple-900">
                        <abbr title="Linkedin Profile">
                            <a
                                href="https://www.linkedin.com/in/shivam-mane-976373219/"
                                target="_blank"
                                className="h-10 w-10 flex justify-center items-center hover:text-white hover:bg-purple-900 hover:shadow-lg hover:shadow-purple-900 rounded-full  border-4 border-purple-900"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </abbr>
                        <abbr title="Github Profile">
                            <a
                                href="https://github.com/shivammane"
                                target="_blank"
                                className="h-10 w-10 flex justify-center items-center hover:text-white hover:bg-purple-900 hover:shadow-lg hover:shadow-purple-900 rounded-full  border-4 border-purple-900"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </abbr>
                        <abbr title="shivamsub8411@gmail.com">
                            <a
                                href="mailto:shivamsub8411@gmail.com"
                                className="h-10 w-10 flex justify-center items-center hover:text-white hover:bg-purple-900 hover:shadow-lg hover:shadow-purple-900 rounded-full  border-4 border-purple-900"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </abbr>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 md:w-1/2 lg:w-1/3">
                    <img className="" src="./assets/img/undraw_programming_re_kg9v.svg" alt="developer thinking image" />
                </div>
            </div>
        </>
    );
}

export default Intro;
