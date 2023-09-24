import AboutMeBlock from "@/components/aboutMe";
import GithubAccountInformation from "@/components/github/github_account_information";
import SkillsBlock from "@/components/skills/skillsBlock";
import axios from "axios";

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
  const aboutMe = await axios.post('http://localhost:3000/api/aboutMe', {key:process.env.PROTECT_API}).then(x => {return x.data});
  const githubUser = await axios.post('http://localhost:3000/api/github/profile', {key:process.env.PROTECT_API}).then(x => {return x.data});

  return {
    props: {
      aboutMe,
      githubUser
    }
  }
}

