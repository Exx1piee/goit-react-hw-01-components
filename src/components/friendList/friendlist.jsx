import PropTypes from 'prop-types';
import {List} from './friendlist.styled.jsx';
import {FriendListItem} from '../friendListItem/friendlistitem.jsx';
export const FriendList = ({friends}) => {
return(
    <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </List>
)
    
}
FriendList.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };