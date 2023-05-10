function SimonGame() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center">Simon Game</h1>
            <div className="mb-8">
                <h3 className="text-xl font-bold">About :</h3>
                <p className="indent-16 text-xl text-justify">
                    This is Simon game. This game challenge memory that how we remember the sequence of the colors.
                </p>
                <p className="indent-16 text-xl text-justify">
                    The frontend of the app is build using <span className="underline text-purple-900">HTML</span>,{" "}
                    <span className="underline text-purple-900">CSS</span> and <span className="underline text-purple-900">Javascript</span>
                </p>
            </div>
            <h3 className="text-xl font-bold">Technologies Used:</h3>
            <ul className="list-disc text-white font-medium">
                <li className="primary-color p-2 m-2 inline-block rounded-lg">HTML</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">CSS</li>
                <li className="primary-color p-2 m-2 inline-block rounded-lg">Javascript</li>
            </ul>
            <h3 className="text-xl font-bold mt-8">App Images :</h3>
            <div className="mt-8">
                <div className="flex justify-center">
                    <img className="lg:w-3/4" src="./assets/img/simongame.png" alt="" />
                </div>
            </div>
            <div className="text-center m-4">
                <a href="https://github.com/shivammane/simon" target="_blank" className="btn m-2 block md:inline">
                    see source code for Simon Game
                </a>
                <a
                    href="https://shivammane.github.io/Simon"
                    target="_blank"
                    className="primary-color text-white font-medium p-2 rounded-lg m-2 block md:inline"
                >
                    TRY SIMON GAME NOW
                </a>
            </div>
        </>
    );
}

export default SimonGame;
