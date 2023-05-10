function ChatApp() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center">Real Time Chat App</h1>
            <div className="mb-8">
                <h3 className="text-xl font-bold">About :</h3>
                <p className="indent-16 text-xl text-justify">
                    This is the chat app used to sent text messege to available user in Real Time. User need to create account first and then user can
                    log in to account and start chatting.
                </p>
                <p className="indent-16 text-xl text-justify">
                    The <span className="underline text-purple-900">Responsive</span> frontend of the app is build using{" "}
                    <span className="underline text-purple-900">Angular</span> and <span className="underline text-purple-900">Tailwind css</span> and
                    also used <span className="underline text-purple-900">socket.io-client</span> library for real time communication.
                </p>
                <p className="indent-16 text-xl text-justify">
                    {" "}
                    The backend of the app is build using <span className="underline text-purple-900">Express.js</span> framework and{" "}
                    <span className="underline text-purple-900">socket.io</span> library for real time communication and for database{" "}
                    <span className="underline text-purple-900">MySQL</span> RDBMS is used for authorization of user{" "}
                    <span className="underline text-purple-900">JWT</span> is used.
                </p>
                <p className="text-center mt-8">
                    *The app is currently not hosted so for now you can see the code base for the app on github on given link below
                </p>
            </div>
            <h3 className="text-xl font-bold">Technologies Used:</h3>
            <ul className="list-disc text-white font-medium">
                <li className="primary-color p-2 m-2 inline-block rounded-lg">Angular</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">Express.js</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">MySQL</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">Socket.io</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">JWT</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">Tailwind css</li>
            </ul>
            <h3 className="text-xl font-bold mt-8">App Images :</h3>

            <div className=" md:grid lg:grid-cols-4 md:grid-cols-2 items-center justify-between mt-10">
                <div className="flex justify-center mb-4 rounded-lg">
                    <img className="w-64" src="./assets/img/chatapploginlg.png" alt="" />
                </div>
                <div className="flex justify-center mb-4 rounded-lg">
                    <img className="w-64" src="./assets/img/chatappcreateaccountlg.png" alt="" />
                </div>
                <div className="flex justify-center mb-4 rounded-lg">
                    <img className="w-64" src="./assets/img/chatappchat.png" alt="" />
                </div>
                <div className="flex justify-center mb-4 rounded-lg">
                    <img className="w-64" src="./assets/img/chatapploginsm.png" alt="" />
                </div>
                <div className="flex justify-center mb-4 rounded-lg">
                    <img className="w-64" src="./assets/img/chatappcreateaccountsm.png" alt="" />
                </div>
                <div className="flex justify-center mb-4 rounded-lg">
                    <img className="w-64" src="./assets/img/chatappchatsm.png" alt="" />
                </div>
                <div className="flex justify-center mb-4 rounded-lg">
                    <img className="w-64" src="./assets/img/chatappchatsm1.png" alt="" />
                </div>
            </div>
            <div className="text-center">
                <a href="https://github.com/shivammane/chatapp-web-" target="_blank" className="btn m-2 block md:inline">
                    see source code for frontend
                </a>

                <a href="https://github.com/shivammane/chatApp-updated-backend" target="_blank" className="btn m-2 block md:inline">
                    see source code for backend
                </a>
            </div>
        </>
    );
}

export default ChatApp;
