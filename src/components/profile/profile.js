import './profile.css';
import PropTypes from 'prop-types';
import defaultImage from '../../oops.jpg';

function Profile({
  name,
  tag,
  location,
  avatar = defaultImage,
  followers,
  views,
  likes,
}) {
  return (
    <div className="Profile">
      <div className="Profile__description">
        <img src={avatar} alt={name} className="Profile__avatar" width="150" />
        <p className="Profile__name">{name}</p>
        <p className="Profile__tag">@{tag}</p>
        <p className="Profile__location">{location}</p>
      </div>

      <ul className="Profile__stats">
        <li className="Profile__stats__item">
          <span className="Profile__label">Followers</span>
          <span className="Profile__quantity">{followers}</span>
        </li>
        <li className="Profile__stats__item">
          <span className="Profile__label">Views</span>
          <span className="Profile__quantity">{views}</span>
        </li>
        <li className="Profile__stats__item">
          <span className="Profile__label">Likes</span>
          <span className="Profile__quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
