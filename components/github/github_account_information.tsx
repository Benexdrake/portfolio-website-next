export default function GithubAccountInformation(props:any)
{
    const user = props.user;
    return (
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
                      <div>Followers: </div>
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
    )
}