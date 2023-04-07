import { MdLocationOn } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { HiLink } from 'react-icons/hi';
import dayjs from 'dayjs';

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
        <div className="user-details">
          <div className="user-img">
            <img src={avatar_url} alt="Avatar" className="avatar" />
          </div>
          <div className="user-basics">
            <div className="user-name">
              <h2 className="title">{name}</h2>
              <a
                href={html_url}
                className="user-link"
                target="_blank"
                rel="noreferrer"
              >
                @{login}
              </a>
            </div>
            <div className="user-date">
              Joined {dayjs(created_at).format('DD MMM YYYY')}
            </div>
          </div>
        </div>
        <p className="user-bio">{bio || 'This Profile has no bio'}</p>
        <div className="user-stats">
          <div className="state">
            <div className="title">Repos</div>
            <div className="num">{public_repos}</div>
          </div>
          <div className="state">
            <div className="title">Followers</div>
            <div className="num">{followers}</div>
          </div>
          <div className="state">
            <div className="title">Following</div>
            <div className="num">{following}</div>
          </div>
        </div>
        <ul className="user-links">
          <li className={`link ${location ? 'available' : 'unavailable'}`}>
            <MdLocationOn className="link-icon" />
            <span className="text">{location || 'Not Available'}</span>
          </li>
          <li className={`link ${blog ? 'available' : 'unavailable'}`}>
            {blog ? (
              <a href={blog} target="_blank" rel="noreferrer">
                <HiLink className="link-icon" />
                <span className="text">{blog}</span>
              </a>
            ) : (
              <>
                <HiLink className="link-icon" />
                <span className="text">Not Available</span>
              </>
            )}
          </li>
          <li
            className={`link ${twitter_username ? 'available' : 'unavailable'}`}
          >
            {twitter_username ? (
              <a
                href={`https://twitter.com/${twitter_username}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="link-icon" />
                <span className="text">{twitter_username}</span>
              </a>
            ) : (
              <>
                <FaTwitter className="link-icon" />
                <span className="text">Not Available</span>
              </>
            )}
          </li>
          <li className={`link ${company ? 'available' : 'unavailable'}`}>
            <BsFillBuildingsFill className="link-icon" />
            <span className="text">{company || 'Not Available'}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default User;
