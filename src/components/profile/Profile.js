import PropTypes from 'prop-types';
// import 
// import Profile from '../profile'
export default function Profile ({ userName, tag, location, avatar, statsFollowers, statsViews, statsLikes }) {
    return (
        <div className="profile">
                <div className="description">
                <img
                    src={avatar}
                        alt="User avatar"
                        className="avatar"
                    />
                    <p className='name'>{userName}</p>
                    <p className='tag'>@{tag}</p>
                    <p className='location'>{location}</p>
                </div>

                <ul className="stats">
                    <li>
                        <span className="label">Followers</span>
                    <span className="quantity">{ statsFollowers}</span>
                    </li>
                    <li>
                        <span className="label">Views</span>
                    <span className="quantity">{ statsViews}</span>
                    </li>
                    <li>
                        <span className="label">Likes</span>
                    <span className="quantity">{ statsLikes}</span>
                    </li>
                </ul>
        </div>
    )
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    statsFollowers: PropTypes.number.isRequired,
    statsViews: PropTypes.number.isRequired,
    statsLikes: PropTypes.number.isRequired
}