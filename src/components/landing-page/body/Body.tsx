import React from "react";
import LearnSkills from "./LearnSkills";
import Welcome from "./Welcome";

const Body: React.FC<{}> = () => {
    return (
        <div>
            <Welcome />
            <LearnSkills />
        </div>
    )
}

export default Body;