export default function PokemonAttribut(props:any)
{
    const text = props.text;
    const value = props.value;

    return (
        <div className="css-table-row">
                <div className="css-table-row-attributes">
                    {text}:
                </div>
                <div className="css-table-row-attributes">
                    {value}
                </div>
            </div>
    );
}