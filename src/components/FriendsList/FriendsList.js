import PropTypes from 'prop-types'
import  FriendsListItem  from './FriendsListItem'


function FriendsList({ friends }) {
    return (
            <ul className="friendsList">
                {friends.map(friend => (
                    <li key={friend.id}className="friendsItem" >
                        <FriendsListItem
                            friendsAvatar={friend.avatar}
                            friendsName={friend.name}
                            friendsStatus={friend.isOnline}
                        />
                    </li>
                ))}
            </ul>
    )
}

FriendsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default FriendsList