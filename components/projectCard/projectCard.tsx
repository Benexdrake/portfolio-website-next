export default function ProjectCard(props:any)
{
    const image = props.image;
    const title = props.title;
    const description = props.description;

    return (
        <div className="card">
  <img src={`assets/projects/${image}`} className="card-img-top" alt={title} width={300}/>
  <div className="card-body bg-color1">
    <h5 className="card-title text-color4">{title}</h5>
    <p className="card-text text-color4">{description}</p>
  </div>
</div>
    );

}