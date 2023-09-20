import { Fragment } from "react";
import Image from 'next/image';

export default function PokemonEvolutions(props:any)
{
    const images = props.images;
    const id = props.id;

    return (
        <Fragment>

        <h3>Evolutions:</h3>
            {images.map((x:string) => {
                return (
                    <Image key={id + x} src={x} width={100} height={100} className='bg-color2' style={{ margin: '5px', borderRadius: '30px', padding: '5px' }} alt=""/>
                    ) 
                })}
        </Fragment>
    );
}