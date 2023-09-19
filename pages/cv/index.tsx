import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getIcon, getJourneys, getSkills, getStars } from '@/lib/helper';
import { Skill } from '@/models/aboutMe';
import { Fragment } from 'react';
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function CV(props: any) {
  const aboutMe = props.aboutMe;
  return (
    <div>
      {aboutMe && (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 bg-color1 cv-left">
          <div>
                <div className="d-flex justify-content-center"><img src="../../../assets/Me.png" width="200px" alt="" className="aboutMe-Image"/></div>
                <div className="d-flex justify-content-center">
                    <h2 className="text-color4">{aboutMe.name}</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <h4 className="text-color3">Fullstack Developer</h4>
                </div>
                <hr className="text-color4"/>
                <div>
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
                  <hr className="text-color4"/>
                </div>
                <div>
                  <div className='d-flex justify-content-center'>
                <h3 className="text-color3">SKILLS</h3>
                  </div>
                
                <div className='d-flex justify-content-center'>

                <div className="css-table">
                <div className='d-flex justify-content-center'>
                  <h4 className="text-color4">Frontend</h4>
                  </div>
                  <div className='css-table-row'>

                  <div className='css-table-row-cv'>

                  {getSkills('frontend', aboutMe.skills).map((x: Skill) => {
                    return (
                      <div key={x.title + x.type} className="css-table-row d-flex justify-content-between">
                            <div className="col-md-5"><strong className="skill-title">{x.title}</strong></div>
                            <div className="stars col-5">{getStars(x.stars)}</div>    
                        </div>
                    )
                  })}
                  </div>

                  </div>
                  <div className='d-flex justify-content-center'>
                  <h4 className="text-color4">Backend</h4>
                  </div>
                  <div className='css-table-row'>

                  <div className='css-table-row-cv'>

                  {getSkills('backend', aboutMe.skills).map((x: Skill) => {
                    return (
                      <div key={x.title + x.type} className="css-table-row d-flex justify-content-between">
                            <div className="col-md-5"><strong className="skill-title">{x.title}</strong></div>
                            <div className="stars col-5">{getStars(x.stars)}</div>    
                        </div>
                    )
                  })}
                  </div>
                  </div>
                  <div className='d-flex justify-content-center'>
                  <h4 className="text-color4">Others</h4>
                  </div>
                  <div className='css-table-row'>

                  <div className='css-table-row-cv'>

                  {getSkills('others', aboutMe.skills).map((x: Skill) => {
                    return (
                      <div key={x.title + x.type} className="css-table-row d-flex justify-content-between">
                            <div className="col-md-5"><strong className="skill-title">{x.title}</strong></div>
                            <div className="stars col-5">{getStars(x.stars)}</div>    
                        </div>
                    )
                  })}
                  </div>
                  </div>
                
                  </div>
                </div>

                </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 bg-color4 cv-right" >
            <div className='d-flex justify-content-center'>
          <h3 className="text-color3">PROFILE</h3>
            </div>
            {aboutMe.profileText.map((x:string) => {return <p className='text-color1'>{x}</p>})}
          <hr className="text-color1"/>
          <div className='d-flex justify-content-center'>
          <h3 className="text-color3">Experience</h3>
            </div>
            <div className='css-table text-color1'>
              
                  {getJourneys(aboutMe.journeys, 'experience').map(x => {
                    return (
                      <div className='css-table-row row'>
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
              <hr className="text-color1"/>
              <div className='d-flex justify-content-center'>
          <h3 className="text-color3">Education</h3>
            </div>
            <div className='css-table text-color1'>
              
                  {getJourneys(aboutMe.journeys, 'education').map(x => {
                    return (
                      <div className='css-table-row row'>
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

          </div>




        </div>
      </div> 
      )}
    </div>
  )
}

export async function getServerSideProps() {
  const aboutMe = await fetch('http://localhost:3000/api/aboutMe').then(x => { return x.json() })

  return {
    props: {
      aboutMe
    }
  }
}
