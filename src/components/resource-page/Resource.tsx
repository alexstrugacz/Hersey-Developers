import * as React from "react"
const Resource: React.FC<{
    name: string;
    link: string;
}> = (props) => {
    return (
        <a href={props.link} target="_blank" className={"text-2xl font-Grotesk font-medium text-cyan-400 hover:font-bold transition-all"}>{props.name}</a>
    );
}
export default Resource