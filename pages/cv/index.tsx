import CvImageBlock from '@/components/cv/cv_image_block';
import CvContactBlock from '@/components/cv/cv_contact_block';
import CvTableBlock from '@/components/cv/cv_table_row';
import CvSkillsBlock from '@/components/cv/cv_skills_block';
import axios from 'axios';
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
                <CvImageBlock aboutMe={aboutMe} />
                <hr className="text-color4" />
                <CvContactBlock aboutMe={aboutMe} />
                <hr className="text-color4" />
                <div>
                  <div className='d-flex justify-content-center'>
                    <h3 className="text-color3">SKILLS</h3>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <div className="css-table">
                      <CvSkillsBlock skills={aboutMe.skills} type="frontend" title="Frontend"/>
                      <CvSkillsBlock skills={aboutMe.skills} type="backend" title="Backend" />
                      <CvSkillsBlock skills={aboutMe.skills} type="others" title="Others" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 bg-color4 cv-right" >
              <div className='d-flex justify-content-center'>
                <h3 className="text-color3">PROFILE</h3>
              </div>
              {aboutMe.profileText.map((x: string) => { return <p key={x} className='text-color1'>{x}</p> })}
              <CvTableBlock aboutMe={aboutMe} type="experience" title="EXPERIENCE" />
              <CvTableBlock aboutMe={aboutMe} type="education" title="EDUCATION" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps() {
  const aboutMe = await axios.post('http://localhost:3000/api/aboutMe', {key:process.env.PROTECT_API}).then(x => {return x.data});

  return {
    props: {
      aboutMe
    }
  }
}
