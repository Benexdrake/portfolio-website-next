import { Fragment } from "react";
import Image from 'next/image';

export default function CvImageBlock(props: any) {
    const aboutMe = props.aboutMe;
    return (
        <Fragment>
            <div className="d-flex justify-content-center"><Image src="/../../../assets/Me.png" width={250} height={250} alt="" className="aboutMe-Image" /></div>
            <div className="d-flex justify-content-center">
                <h2 className="text-color4">{aboutMe.name}</h2>
            </div>
            <div className="d-flex justify-content-center">
                <h4 className="text-color3">Fullstack Developer</h4>
            </div>
        </Fragment>
    )
}