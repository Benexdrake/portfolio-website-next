import { Fragment } from "react";

export default function PokemonSkills(props:any)
{
    const pokemon = props.pokemon;

    return (
        <Fragment>
            <h3>Skills:</h3>
            <table className='table table-striped' style={{width: '460px'}}>
              <tbody>
                {pokemon.abilities.map((x:any) => {
                  return (
                    <tr key={pokemon._id + x.name}>
                  <td style={{width: '120px'}}>
                    {x.name}
                  </td>
                  <td>
                    {x.description}
                  </td>
                </tr>
                  )
                })}
              </tbody>
            </table>
        </Fragment>
    );
}