import PropTypes from 'prop-types';
import css from './Profile.module.css'

export default function Profile ({ userName, tag, location, avatar, statsFollowers, statsViews, statsLikes }) {
    return (
        <div className={css.profile}>
                <div className={css.description}>
                <img
                    src={avatar}
                        alt="User avatar"
                        className={css.avatar}
                    />
                    <p className={css.name}>{userName}</p>
                    <p className={css.tag}>@{tag}</p>
                    <p className={css.location}>{location}</p>
                </div>

                <ul className={css.stats}>
                    <li>
                        <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{ statsFollowers}</span>
                    </li>
                    <li>
                        <span className={css.label}>Views</span>
                    <span className={css.quantity}>{ statsViews}</span>
                    </li>
                    <li>
                        <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{ statsLikes}</span>
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