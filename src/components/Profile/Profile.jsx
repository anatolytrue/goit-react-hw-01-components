import PropTypes from 'prop-types';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
    return (
        <>
                <div className="description">
                <img
                    src={avatar }
                        alt="User avatar"
                        className="avatar"
                    />
                    <p>{userName}</p>
                    <p>{tag}</p>
                    <p>{location}</p>
                </div>

                <ul className="stats">
                    <li>
                        <span className="label">Followers</span>
                        <span className="quantity">1000</span>
                    </li>
                    <li>
                        <span className="label">Views</span>
                        <span className="quantity">2000</span>
                    </li>
                    <li>
                        <span className="label">Likes</span>
                        <span className="quantity">3000</span>
                    </li>
                </ul>
        </>
    )
}