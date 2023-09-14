import { Fragment } from "react";
import Navbar from "./navbar";
export default function Layout(props:any)
{
    return (
        <Fragment>
            <Navbar/>
            {props.children}
        </Fragment>
        )
}