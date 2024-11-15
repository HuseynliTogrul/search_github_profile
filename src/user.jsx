const User = ({ user, isDarkMode }) => {
    const { avatar_url, followers, following, public_repos, login, name, created_at, bio } = user;

    const createdAt = new Date(created_at)

    return (
        <div className="user">
            <div>
                <img src={avatar_url} className='avatar' alt="User" />
            </div>
            <div className="userInfo">
                <div className="userInfoLeft">
                    <div>
                        <div className="userName">
                            <p>{name ? name : "No name"}</p>
                        </div>
                        <div className="userGitLink">
                            <a href={`https://github.com/${login}`}>@{login}</a>
                        </div>
                        <div className="userBio">
                            <p>{bio ? bio : 'This profile has no bio'}</p>
                        </div>
                    </div>
                    <p>
                        Joined {' '}
                        {
                            `${createdAt.getDate()} ${createdAt.toLocaleString('en-us', {
                                month: 'short'
                            })} ${createdAt.getFullYear()}`
                        }
                    </p>
                </div>
                <div className={`cardProfileInfo ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
                    <div className="publicRepo">
                        <p><b>Repos</b></p>
                        <p>{public_repos}</p>
                    </div>
                    <div className="following">
                        <p><b>Following</b></p>
                        <p>{following}</p>
                    </div>
                    <div className="followers">
                        <p><b>Followers</b></p>
                        <p>{followers}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User