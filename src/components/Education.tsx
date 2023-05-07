function Education() {
    return (
        <>
            <div className="md:w-1/2">
                <div className="text-4xl font-bold mb-8">
                    <h1>My</h1>
                    <h1 className="text-orange-400">Education</h1>
                </div>
                <div>
                    <div className="border-l-purple-900 border-l-4 p-2 relative">
                        <div className="absolute h-2 w-2 bg-purple-900 rounded-full -top-1 -left-1.5"></div>
                        <div className="absolute h-2 w-2 bg-purple-900 rounded-full -bottom-1 -left-1.5"></div>
                        <div className="absolute -top-2 text-slate-600">Jun 18 - Jun 22</div>
                        <div className="mt-4">
                            <h6 className="font-medium text-xl">
                                <span className="text-purple-900">B.tech -</span> Electronics and telecommunication
                            </h6>
                            <h5 className="">Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIET), Nanded</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
