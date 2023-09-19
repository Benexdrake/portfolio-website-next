import { GithubUser } from "@/models/githubUser";
import { useSession } from "next-auth/react"

export default function Profile() 
{
  const {data:session} = useSession();
  
  

  return (
    <div className="container">
    {session && (
      <div className="block">
        <div className="row">
        <div className="col-1">
            <img src={`https://cdn.discordapp.com/avatars/${session.user.id}/${session.user.avatar}.webp`} width={100} height={100}/>
        </div>
        <div className="col-9">
          <div>{session.user.global_name}</div>
        </div>
        </div>
      </div>
    )}
   </div>
  )
}
