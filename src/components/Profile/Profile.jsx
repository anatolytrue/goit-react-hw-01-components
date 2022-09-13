import PropTypes from 'prop-types';
import css from './Profile.module.css';
import Stats from './Stats';

export default function Profile ({ userName, tag, location, avatar, stats }) {
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

            <Stats stats={stats} />
        </div>
    )
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}