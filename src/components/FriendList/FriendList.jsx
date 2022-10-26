import {FriendListItem} from './FriendListItem';
import PropTypes from 'prop-types';
//import {css} from './StatsList.module';

export const FriendList = ({ friends }) => {
    return ( 
    <ul /*className={css.statsList}*/>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
        <FriendListItem 
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
        </li>
        ))}
    </ul>
 );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
 isOnline: PropTypes.bool,
  }),
  ),
};