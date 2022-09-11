import PropTypes from 'prop-types'


export default function FriendsListItem(props) {
    const { friendsAvatar, friendsName, friendsStatus } = props;
    return (
        <>
            <span className="status">{friendsStatus}</span>
            <img className="avatar" src={friendsAvatar} alt="User avatar" width="48" />
            <p className="name">{friendsName}</p>
        </>
    )
} 

FriendsListItem.propTypes = {
    friendsAvatar: PropTypes.string.isRequired,
    friendsName: PropTypes.string.isRequired,
    friendsStatus: PropTypes.bool.isRequired
}