function ResumeBuilder() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center">Resume Builder</h1>
            <div className="mb-8">
                <h3 className="text-xl font-bold">About :</h3>
                <p className="indent-16 text-xl text-justify">
                    Resume Builder used to create the resume using available templates we can see the the how resume will look when we fill the fields
                    from the given form.
                </p>
                <p className="indent-16 text-xl text-justify">
                    The frontend of the app is build using <span className="underline text-purple-900">Angular</span>.
                </p>
                <p className="indent-16 text-xl text-justify">
                    Browser local storage is used for saving data so the data will not lost untill we clear site data.
                </p>
            </div>
            <h3 className="text-xl font-bold">Technologies Used:</h3>
            <ul className="list-disc text-white font-medium">
                <li className="primary-color p-2 m-2 inline-block rounded-lg">Angular</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">HTML</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">CSS</li>
            </ul>
            <h3 className="text-xl font-bold mt-8">App Images :</h3>
            <div className="mt-8">
                <div className="flex justify-center">
                    <img className="lg:w-3/4" src="./assets/img/resumebuilder.png" alt="" />
                </div>
            </div>
            <div className="text-center m-4">
                <a href="https://github.com/shivammane/resume-builder" target="_blank" className="btn m-2 block md:inline">
                    see source code for Resume Builder
                </a>
                <a
                    href="https://shivammane.github.io/resume-builder"
                    target="_blank"
                    className="primary-color text-white font-medium p-2 rounded-lg m-2 block md:inline"
                >
                    TRY RESUME BUILDER NOW
                </a>
            </div>
        </>
    );
}

export default ResumeBuilder;
