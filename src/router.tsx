import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.tsx";
import HomeHome from "./components/HomeHome.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [{ path: "/portfolio", element: <HomeHome /> }],
    },
]);

export default router;
