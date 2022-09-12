import PropTypes from 'prop-types'
import FriendsListItem from './FriendsListItem'
import css from './FriendsList.module.css'

function friendOnline(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
}

function FriendsList({ friends }) {
    return (
        <div className={css.friends}>
            <ul className={css.friendsList}>
                {friends.map(friend => (
                    <li key={friend.id}className={css.friendsItem} >
                        <FriendsListItem
                            friendsAvatar={friend.avatar}
                            friendsName={friend.name}
                            friendsStatus={friend.isOnline}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

FriendsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default FriendsList