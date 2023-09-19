import { getImage } from "@/lib/helper"

export default function GithubCard(props:any)
{
    const project = props.project
    return (
        <div className="card">
    <a href="{{project.githubProjectUrl}}" style={{['textDecoration']: 'none'}}>
      <img className="card-img-top" src={getImage(project.language)} alt=""/>
      <div className="card-body bg-color1 text-color4" style={{['height']: '120px'}}>
        <h5 className="card-title test">{project.name}</h5>
        <p className="card-text">{project.description}</p>
      </div>
      <div className="card-footer d-flex justify-content-between bg-color3 text-color4">
        <div>Last Update: {project.lastUpdate.split('T')[0]}</div>
      </div>
    </a>
  </div>
    )
}