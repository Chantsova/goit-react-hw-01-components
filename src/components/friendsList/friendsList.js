import FriendsListItem from '../friendListItem/friendsListItem';

function FriendsList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li class="item" key={friend.id}>
          <FriendsListItem
            url={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
