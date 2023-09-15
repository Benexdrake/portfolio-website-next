import Link from "next/link";
export default function Button(props:any)
{
    if(props.link)
    {
        return (<Link className="" href={props.link}>{props.children}</Link>);
    }

    return (<a className="" onClick={props.onClick}>{props.children}</a>);

}