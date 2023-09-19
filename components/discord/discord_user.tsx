export default function DiscordUserInformation(props:any)
{
    const user = props.user;

    return (
        <div className="row">
            <img className="discord-image" src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`}/>
            <div className="col-8">{user.username}#{user.discriminator}
            <div>{user.global_name}</div>
            </div>
        </div>
        )
}