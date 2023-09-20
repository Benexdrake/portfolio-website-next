import { Fragment } from "react";

export default function PokemonSkills(props:any)
{
    const pokemons = props.pokemons;

    return (
        <Fragment>
            <h3>Skills:</h3>
            <table className='table table-striped' style={{width: '460px'}}>
              <tbody>
                {pokemons[0].abilities.map((x:any) => {
                  return (
                    <tr>
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