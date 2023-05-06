import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.tsx";
import HomeHome from "./components/HomeHome.tsx";
import ChatApp from "./components/ChatApp.tsx";
import ResumeBuilder from "./components/ResumeBuilder.tsx";
import WhatsappWeb from "./components/WhatsappWeb.tsx";
import YoutubeDownloader from "./components/YoutubeDownloader.tsx";
import SimonGame from "./components/SimonGame.tsx";
import StockPricePrediction from "./components/StockPricePrediction.tsx";

const router = createBrowserRouter([
    {
        path: "/portfolio",
        element: <Home />,
        children: [
            { path: "", element: <HomeHome /> },
            { path: "chatapp", element: <ChatApp /> },
            { path: "resume-builder", element: <ResumeBuilder /> },
            { path: "whatsapp-web", element: <WhatsappWeb /> },
            { path: "youtube-downloader", element: <YoutubeDownloader /> },
            { path: "simon-game", element: <SimonGame /> },
            { path: "stock-price-prediction", element: <StockPricePrediction /> },
        ],
    },
]);

export default router;
