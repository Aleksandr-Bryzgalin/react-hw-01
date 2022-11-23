import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div class="description">
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers: </span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views: </span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes: </span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
