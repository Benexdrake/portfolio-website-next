import { getIcon, getStars } from "@/lib/helper";
import { Skill } from "@/models/aboutMe";

export default function Skills(props: any) {
    const skills = props.skills;
    const title = props.title;
    return (
        <div className="d-flex justify-content-start">

        <div className="skills skill-block">
            <div className="skillHeader">
                <h4>{title}</h4>
            </div>
            <div className="css-table">
                {skills.map((x: Skill) => {
                    return (
                        <div key={x.title + x.type} className="css-table-row d-flex justify-content-between">
                            <div><img src={getIcon(x.icon)} alt="" className="skill-icon col-1" /></div>
                            <div className="col-md-5"><strong className="skill-title">{x.title}</strong></div>
                            <div className="stars col-5">{getStars(x.stars)}</div>    
                        </div>
                    )
                })}
            </div>
        </div>
                </div>
    )
}