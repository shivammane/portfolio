function Experience() {
    return (
        <>
            <div className="text-4xl font-bold">
                <h1>My</h1>
                <h1 className="text-orange-400">Experience</h1>
            </div>
            <div className="border-l-purple-900 border-l-4 p-2 relative">
                <div className="absolute h-2 w-2 bg-purple-900 rounded-full -top-1 -left-1.5"></div>
                <div className="absolute h-2 w-2 bg-purple-900 rounded-full -bottom-1 -left-1.5"></div>
                <div className="absolute -top-2 text-slate-600">Jan 22 - Jun 22 : 5 mos</div>
                <div className="mt-4">
                    <h5 className="font-medium text-xl">Programmer Analyst Trainee</h5>
                    <h6 className="text-lg font-medium">Cognizant : Internship</h6>
                    <p className="font-medium">
                        skills Learned : <span className="primary-color p-1 mx-1 rounded-lg text-white">Java</span>
                        <span className="primary-color p-1 mx-1 rounded-lg text-white">Python</span>
                        <span className="primary-color p-1 mx-1 rounded-lg text-white">MySQL</span>
                        <span className="primary-color p-1 mx-1 rounded-lg text-white">Shell Script</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Experience;
