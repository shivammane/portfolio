function Experience() {
    return (
        <>
            <div className="md:flex">
                <div className="md:w-1/2">
                    <div className="text-4xl font-bold mb-8">
                        <h1>My</h1>
                        <h1 className="text-orange-400">Experience</h1>
                    </div>
                    <div>
                        <div className="border-l-purple-900 border-l-4 p-2 relative">
                            <div className="absolute h-2 w-2 bg-purple-900 rounded-full -top-1 -left-1.5"></div>
                            <div className="absolute h-2 w-2 bg-purple-900 rounded-full -bottom-1 -left-1.5"></div>
                            <div className="absolute -top-2 text-slate-600">Jan 22 - Jun 22 : 6 mos</div>
                            <div className="mt-4">
                                <h5 className="font-medium text-xl">Programmer Analyst Trainee</h5>
                                <h6 className="text-lg font-medium">
                                    <span className="text-purple-900">Cognizant :</span> Internship
                                </h6>
                                <p>skills learned :</p>
                                <div className="font-medium flex">
                                    <div className="primary-color p-1 mx-1 rounded-lg text-white">Java</div>
                                    <div className="primary-color p-1 mx-1 rounded-lg text-white">Python</div>
                                    <div className="primary-color p-1 mx-1 rounded-lg text-white">MySQL</div>
                                    <div className="primary-color p-1 mx-1 rounded-lg text-white">Shell Script</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 md:w-1/2">
                    <img src="./assets/img/undraw_code_thinking_re_gka2.svg" alt="developer thinking image" />
                </div>
            </div>
        </>
    );
}

export default Experience;
