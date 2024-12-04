import PropTypes from 'prop-types';
import css from './Profile.module.css';

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  const defaultImage =
    'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

  return (
    <div className={css.profile}>
      <div className={css.imageContainer}>
        <img
          src={image || defaultImage}
          alt="User avatar"
          className={css.image}
        />
        <p className={css.name}>{name}</p>
        <p className={css.dscr}>@{tag}</p>
        <p className={css.dscr}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.data}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.data}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.data}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
