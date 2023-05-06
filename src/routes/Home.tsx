import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Home() {
    return (
        <>
            <div className="fixed top-0 left-0 -z-10 w-[50rem] h-[50rem] rounded-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-100 via-purple-300 to-indigo-400"></div>
            <div className="fixed bottom-0 left-0 -z-10 w-[30rem] h-[30rem] rounded-full -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-200"></div>
            <div className="hidden lg:block fixed bottom-10 right-40 -z-10 w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-green-100 via-blue-400 to-purple-600"></div>
            <div className="overflow-x-hidden p-2 m-4 rounded-lg bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border-gray-100">
                <Header />
                <div className="mx-2">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Home;
