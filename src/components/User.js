import UserDetails from './UserDetails';
import UserStats from './UserStats';
import UserLinks from './UserLinks';

function User({ user }) {
  const {
    avatar_url,
    name,
    html_url,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = user;

  return (
    <section className="user">
      <div className="user-img">
        <img src={avatar_url} alt="Avatar" className="avatar" />
      </div>
      <div className="user-info">
        <UserDetails
          avatar_url={avatar_url}
          name={name}
          html_url={html_url}
          login={login}
          created_at={created_at}
        />
        <p className="user-bio">{bio || 'This Profile has no bio'}</p>
        <UserStats
          repos={public_repos}
          followers={followers}
          following={following}
        />
        <UserLinks
          location={location}
          blog={blog}
          twitter={twitter_username}
          company={company}
        />
      </div>
    </section>
  );
}

export default User;
