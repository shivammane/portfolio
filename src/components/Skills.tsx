import skills from "../data/skills";

function Skills() {
    return (
        <>
            <div className="my-4">
                <div className="text-4xl font-bold">
                    <h1>My</h1>
                    <h1 className="text-orange-400">Technical skills</h1>
                </div>
                <div className="my-4 grid grid-cols-3 md:grid-cols-6 text-white gap-4">
                    {skills.map((skill, id) => {
                        return (
                            <div
                                className="p-2 m-1 w-24 rounded-lg space-y-2 primary-color hover:-translate-y-2 active:scale-90 transition-transform"
                                key={id}
                            >
                                <img className="w-16 h-16 mx-auto" src={skill.src} alt="" />
                                <div className=" text-center font-medium">{skill.skill}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Skills;
