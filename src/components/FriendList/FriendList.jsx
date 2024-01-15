import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendList.styled.jsx';

function FriendList({ friends }) {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        <FriendListItem data={friend} key={friend.id} />
      ))}
    </List>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

function FriendListItem({ data }) {
  const color = data.isOnline ? 'green' : 'red';
  return (
    <Item className="item" key={data.id}>
      <Status className="status" style={{ backgroundColor: color }}>
        &bull;
      </Status>
      <Avatar
        className="avatar"
        src={data.avatar}
        alt="User avatar"
        width="48"
      />
      <Name className="name">{data.name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
// aici trebuie sa introduc PropTypes pt Friends
export default FriendList;
