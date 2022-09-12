import PropTypes from 'prop-types'
import css from './FriendsList.module.css'

function friendOnline(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
}

export default function FriendsListItem(props) {
    const { friendsAvatar, friendsName, friendsStatus } = props;
    return (
        <>
            <span className={css.status} style={{ color: friendOnline(friendsStatus) }}>
                {' '}●
            </span>
            <img className={css.avatar} src={friendsAvatar} alt="User avatar" width="48" />
            <p className={css.name}>{friendsName}</p>
        </>
    )
} 

FriendsListItem.propTypes = {
    friendsAvatar: PropTypes.string.isRequired,
    friendsName: PropTypes.string.isRequired,
    friendsStatus: PropTypes.bool.isRequired
}