import PropTypes from 'prop-types';

function FriendListItem({ url, name, isOnline }) {
  return (
    <div>
      <span
        class={(isOnline = true ? 'status is-online' : 'status is-offline')}
      ></span>
      <img class="avatar" src={url} alt={name} width="48" />
      <p class="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
