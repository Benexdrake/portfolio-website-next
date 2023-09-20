import { getBirthDate } from "@/lib/helper";
import Image from 'next/image';

export default function AboutMeBlock(props:any)
{   
    const aboutMe = props.aboutMe;
    return (
        <div className="bg-color1 block">

            <div className="row p-3">
              <div className="col-md-3">
                <Image src="/assets/Me.png" alt="" className="float-left aboutMe-Image" width={200} height={200} />
              </div>
              <div className="col-md-9">
                <h1 className="text-color3">{aboutMe.title} </h1>
                <h3 className="text-color4">{aboutMe.name}, {getBirthDate(aboutMe.birthOfDate)}, {aboutMe.location}</h3>
                <a className="icon" href={aboutMe.github} target="_blank">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a className="icon" href={aboutMe.linkedin} target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <h2 className="text-color3">About me</h2>
                <div className="row">
                  <div className="col-md-9">
                    <p>I am a motivated and versatile individual, always eager to take a new challenges.
                      With a passion for learning, i am dedicated to delivering high-quality results.
                      With a positive attitude and a growth mindset, i am ready to make a meaningful
                      contribution and achieve great things.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}