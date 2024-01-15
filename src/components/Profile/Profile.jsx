import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  ListItem,
  Label,
  Quantity,
} from './Profile.styled.jsx';

function Profile({ avatar, username, tag, location, followers, views, likes }) {
  return (
    <ProfileWrap className="profile">
      <Description className="description">
        <Avatar src={avatar} alt="user avatar" />
        <Name className="name"> {username} </Name>
        <Tag className="tag"> @{tag}</Tag>
        <Location className="location"> {location} </Location>
      </Description>

      <Stats className="stats">
        <ListItem>
          <Label className="label">Followers </Label>
          <Quantity className="quantity">{followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label className="label">Views </Label>
          <Quantity className="quantity">{views}</Quantity>
        </ListItem>
        <ListItem>
          <Label className="label">Likes </Label>
          <Quantity className="quantity">{likes}</Quantity>
        </ListItem>
      </Stats>
    </ProfileWrap>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
