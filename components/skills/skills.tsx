import { Fragment } from "react";
import { Skill } from "@/models/aboutMe";
import Skills from "./skill";


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

const getSkills = (skill:string, skills:Skill[]) => {
    return skills.filter(x => x.type === skill);
  }