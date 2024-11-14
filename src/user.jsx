const User = ({ user }) => {
    const { avatar_url, followers, following, public_repos, login, name, created_at } = user;

    const createdAt = new Date(created_at)
    return (
        <div className='user'>
            <div>
                <img src={avatar_url} className='avatar' alt="User" />
            </div>
            <div className="userName">
                <a href={`https://github.com/${login}`}>{name || login}</a>
            </div>
            <div className="publicRepo">
                <p><b>Public Repo:</b></p>
                <p>{public_repos}</p>
            </div>
            <div className="following">
                <p><b>Following:</b></p>
                <p>{following}</p>
            </div>
            <div className="followers">
                <p><b>Followers:</b></p>
                <p>{followers}</p>
            </div>
            <p>
                User joined on {' '}
                {
                    `${createdAt.getDate()} ${createdAt.toLocaleString('en-us', {
                        month: 'short'
                    })} ${createdAt.getFullYear()}`
                }
            </p>
        </div>
    )
}

export default User