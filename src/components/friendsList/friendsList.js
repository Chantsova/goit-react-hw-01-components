import './friendsList.css';
import PropTypes from 'prop-types';

function FriendsList({ friends }) {
  return (
    <ul className="FriendsList">
      {friends.map(friend => (
        <li className="FriendsList__item" key={friend.id}>
          <span
            className={
              friend.isOnline === true
                ? 'FriendsList__status is-online'
                : 'FriendsList__status'
            }
          >
            &bull;
          </span>
          <img
            className="FriendsList__avatar"
            src={friend.avatar}
            alt={friend.name}
            width="50"
          />
          <p className="FriendsList__name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendsList;
