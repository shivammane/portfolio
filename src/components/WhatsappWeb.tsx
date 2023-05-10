function WhatsappWeb() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center">Whats App Web UI</h1>
            <div className="mb-8">
                <h3 className="text-xl font-bold">About :</h3>
                <p className="indent-16 text-xl text-justify">
                    This is the <span className="underline-text-purple-900">Responsive</span> whats app web UI.
                </p>
                <p className="indent-16 text-xl text-justify">
                    The frontend of the app is build using <span className="underline text-purple-900">HTML</span> and{" "}
                    <span className="underline text-purple-900">SASS</span>
                </p>
            </div>
            <h3 className="text-xl font-bold">Technologies Used:</h3>
            <ul className="list-disc text-white font-medium">
                <li className="primary-color p-2 m-2 inline-block rounded-lg">HTML</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">CSS</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">SASS</li>
            </ul>
            <h3 className="text-xl font-bold mt-8">App Images :</h3>
            <div className="mt-8">
                <div className="flex justify-center">
                    <img className="lg:w-3/4" src="./assets/img/whatsappweb.png" alt="" />
                </div>
            </div>
            <div className="text-center m-4">
                <a href="https://github.com/shivammane/whatapp-web-ui" target="_blank" className="btn m-2 block md:inline">
                    see source code for Whats App UI
                </a>
                <a
                    href="https://shivammane.github.io/whatapp-web-ui/"
                    target="_blank"
                    className="primary-color text-white font-medium p-2 rounded-lg m-2 block md:inline"
                >
                    SEE WHATS APP UI NOW
                </a>
            </div>
        </>
    );
}

export default WhatsappWeb;
