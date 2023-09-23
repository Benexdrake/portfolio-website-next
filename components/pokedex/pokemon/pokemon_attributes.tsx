import { getGender } from "@/lib/helper";
import { Fragment } from "react";

export default function PokemonAttributes(props:any)
{
    const pokemon = props.pokemon;

    return (
        <Fragment>
        <h3>Attributes:</h3>
            <table className='table table-striped' style={{width:'200px'}}>
              <tbody>
                <tr>
                  <td>Height: </td>
                  <td>
                  {pokemon.height}
                  </td>
                </tr>
                <tr>
                  <td>Weight: </td>
                  <td>
                  {pokemon.weight}
                  </td>
                </tr>
                <tr>
                  <td>Category: </td>
                  <td>
                  {pokemon.category}
                  </td>
                </tr>
                <tr>
                  <td>Genders: </td>
                  <td>
                  {getGender(pokemon.genders)}
                  </td>
                </tr>
              </tbody>
            </table>
        </Fragment>
    );
}