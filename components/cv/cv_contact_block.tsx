import { Fragment } from "react";

export default function CvContactBlock(props: any) {
    const aboutMe = props.aboutMe;
    return (
        <Fragment>
            <div className='d-flex justify-content-center'>
                <h3 className="text-color3">CONTACT INFO</h3>
            </div>
            <div className='css-table'>
                <div className='css-table-row'>
                    <div className='d-flex justify-content-center'>
                        <i className="fa-solid fa-phone icon"></i>
                    </div>
                    <div className='link'>
                        {aboutMe.tel}
                    </div>
                </div>
                <div className='css-table-row'>
                    <div className='d-flex justify-content-center'>
                        <i className="fa-solid fa-envelope icon"></i>
                    </div>
                    <div>
                        <a href={`mailto:${aboutMe.email}`} className="link">{aboutMe.email}</a>
                    </div>
                </div>
                <div className='css-table-row'>
                    <div className='d-flex justify-content-center'>
                        <i className="fa-brands fa-linkedin icon"></i>
                    </div>
                    <div>
                        <a href={aboutMe.linkedin} target="_blank" className="link">Linkedin</a>
                    </div>
                </div>
                <div className='css-table-row'>
                    <div className='d-flex justify-content-center'>
                        <i className="fa-brands fa-github icon"></i>
                    </div>
                    <div>
                        <a href={aboutMe.github} target="_blank" className="link">Github</a>
                    </div>
                </div>
                <div className='css-table-row'>
                    <div className='d-flex justify-content-center'>
                        <i className="fa-solid fa-location-dot icon"></i>
                    </div>
                    <div className='link'>
                        {aboutMe.location}
                    </div>
                </div>
                <div className='css-table-row'>
                    <div className='d-flex justify-content-center'>
                        <i className="fa-solid fa-language icon"></i>
                    </div>
                    <div className='link'>
                        {aboutMe?.language?.join(', ')}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}