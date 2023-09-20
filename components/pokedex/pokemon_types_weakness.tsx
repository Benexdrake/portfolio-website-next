export default function PokemonTypesWeakness(props:any)
{
    const attributes = props.attributes;
    const title = props.title;
    const id = props.id;

    return (
        <div className="d-flex justify-content-start">
                        <strong className="text-color1" style={{paddingRight: '10px'}}>{title}: </strong>
                        {attributes.map((x:string) => {
                            return  <img key={id + x} src={`/assets/pokemon_elements/${x.toLowerCase()}.png`} alt="" width={30}/>
                        })}
                    </div>
    )
}