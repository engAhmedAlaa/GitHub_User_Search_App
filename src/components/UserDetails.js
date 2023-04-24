import dayjs from 'dayjs';

function UserDetails({ avatar_url, name, html_url, login, created_at }) {
  return (
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
  );
}

export default UserDetails;
