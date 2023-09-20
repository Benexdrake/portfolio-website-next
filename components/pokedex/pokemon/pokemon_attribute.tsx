export default function PokemonAttribut(props:any)
{
    const text = props.text;
    const value = props.value;

    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
}