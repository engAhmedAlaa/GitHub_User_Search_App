import { MdLocationOn } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { HiLink } from 'react-icons/hi';

function UserLinks({ location, blog, twitter, company }) {
  return (
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
      <li className={`link ${twitter ? 'available' : 'unavailable'}`}>
        {twitter ? (
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="link-icon" />
            <span className="text">{twitter}</span>
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
  );
}

export default UserLinks;
