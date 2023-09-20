import { getSkills, getStars } from "@/lib/helper";
import { Skill } from "@/models/aboutMe";
import { Fragment } from "react";

export default function CvSkillsBlock(props:any)
{
    const skills = props.skills;
    const type = props.type;
    const title = props.title;

    return (
        <Fragment>
        <div className='d-flex justify-content-center'>
                        <h4 className="text-color4">{title}</h4>
                      </div>
                      <div className='css-table-row'>
                        <div className='css-table-row-cv'>
                          {getSkills(type, skills).map((x: Skill) => {
                              return (
                                  <div key={x.title + x.type} className="css-table-row d-flex justify-content-between">
                                <div className="col-md-5"><strong className="skill-title">{x.title}</strong></div>
                                <div className="stars col-5">{getStars(x.stars)}</div>
                              </div>
                            )
                        })}
                        </div>
                      </div>
                        </Fragment>
    );
}