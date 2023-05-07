import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

function HomeHome() {
    return (
        <>
            <div className="space-y-8">
                <Intro />
                <Experience />
                <Education />
                <Skills />
                <Projects />
            </div>
        </>
    );
}

export default HomeHome;
