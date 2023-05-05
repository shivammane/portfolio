import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [{}],
    },
]);

export default router;
