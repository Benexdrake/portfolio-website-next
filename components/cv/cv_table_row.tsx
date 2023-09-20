import { getJourneys } from "@/lib/helper";
import { Fragment } from "react";

export default function CvTableBlock(props: any) {
    const type = props.type;
    const aboutMe = props.aboutMe;
    const title = props.title;

    return (
        <Fragment>
            <hr className="text-color1" />
            <div className='d-flex justify-content-center'>
                <h3 className="text-color3">{title}</h3>
            </div>
            <div className='css-table text-color1'>
                {getJourneys(aboutMe.journeys, type).map(x => {
                    return (
                        <div key={x.type + '-' + x.title} className='css-table-row row'>
                            <div className='col-4'>{x.date}</div>
                            <div className='col-9'>
                                {x.title}
                                <br />
                                {x.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}