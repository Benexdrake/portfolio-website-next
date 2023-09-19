import { Fragment } from "react";
import { Skill } from "@/models/aboutMe";
import Skills from "./skills";
import { getSkills } from "@/lib/helper";


export default function SkillsBlock(props:any)
{
    const skills = props.skills
    return (
        <Fragment>
            <Skills title = "Frontend" skills={getSkills('frontend', skills)}/>
            <Skills title = "Backend" skills={getSkills('backend', skills)}/>
            <Skills title = "Others" skills={getSkills('others', skills)}/>
        </Fragment>
    )
}

