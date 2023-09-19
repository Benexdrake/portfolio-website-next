import SkillsBlock from "@/components/skills/skillsBlock";
import { AboutMe, Skill } from "@/models/aboutMe";

export default function Home(props: any) {
  const aboutMe = props.aboutMe;
  const user = props.githubUser;
  return (
    <div className='container'>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-8 col-lg-12 col-md-12">
          <div className="bg-color1 block">

            <div className="row p-3">
              <div className="col-md-3">
                <img src="/assets/Me.png" alt="" className="float-left aboutMe-Image" width="100%" />
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
          <div className="bg-color1 block">
            <div className="row p-3">
              <div className="col-md-4">
                <img src={user.avatar} alt="" className="float-left" width="80%" />
              </div>
              <div className="col-md-8">

                <h2 className="text-color3">{user.name}, {user.location}</h2>
                <p>{user.bio}</p>
                <div className="col-md-3">

                  <div className="css-table">
                    <div className="css-table-row">
                      <div>Repositories: </div>
                      <div>{user.publicRepos}</div>
                    </div>
                    <div className="css-table-row">
                      <div>Followsers: </div>
                      <div>{user.followers}</div>
                    </div>
                    <div className="css-table-row">
                      <div>Following: </div>
                      <div>{user.following}</div>
                    </div>
                  </div>
                </div>
                <div>
                  On Github since {user.createdAt.split('T')[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-12">
          <SkillsBlock skills={aboutMe.skills} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const aboutMe = await fetch('http://localhost:3000/api/aboutMe').then(x => { return x.json() })
  const githubUser = await fetch('http://localhost:3000/api/github/profile').then(x => { return x.json() })

  return {
    props: {
      aboutMe,
      githubUser
    }
  }
}

const getBirthDate = (birthOfDate: number) => {
  let timeDiff = Math.abs(Date.now() - new Date(birthOfDate).getTime());
  let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
  return age
}