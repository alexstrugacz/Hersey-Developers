import React from "react";
import LearnSkills from "./LearnSkills";
import Welcome from "./Welcome";
import BuildProjects from "./BuildProjects";
import JoinCommunity from "./JoinCommunity";

const Body: React.FC<{}> = () => {
    return (
        <div className="">
            <Welcome />
            <LearnSkills />
            <BuildProjects />
            <JoinCommunity />
        </div>
    )
}

export default Body;