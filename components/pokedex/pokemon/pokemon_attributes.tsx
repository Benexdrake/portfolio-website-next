import { getGender } from "@/lib/helper";
import { Fragment } from "react";

export default function PokemonAttributes(props:any)
{
    const pokemons = props.pokemons;

    return (
        <Fragment>
        <h3>Attributes:</h3>
            <table className='table table-striped' style={{width:'200px'}}>
              <tbody>
                <tr>
                  <td>Height: </td>
                  <td>
                  {pokemons[0].height}
                  </td>
                </tr>
                <tr>
                  <td>Weight: </td>
                  <td>
                  {pokemons[0].weight}
                  </td>
                </tr>
                <tr>
                  <td>Category: </td>
                  <td>
                  {pokemons[0].category}
                  </td>
                </tr>
                <tr>
                  <td>Genders: </td>
                  <td>
                  {getGender(pokemons[0].genders)}
                  </td>
                </tr>
              </tbody>
            </table>
        </Fragment>
    );
}