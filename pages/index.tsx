import AboutMeBlock from "@/components/aboutMe";
import GithubAccountInformation from "@/components/github/github_account_information";
import SkillsBlock from "@/components/skills/skillsBlock";
import { AboutMe, Skill } from "@/models/aboutMe";

export default function Home(props: any) {
  const aboutMe = props.aboutMe;
  const user = props.githubUser;
  return (
    <div className='container'>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-8 col-lg-12 col-md-12">
          <AboutMeBlock aboutMe={aboutMe}/>
          <GithubAccountInformation user={user}/>
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

