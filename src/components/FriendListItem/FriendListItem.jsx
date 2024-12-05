import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const defaultImage =
    'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';
  // Для обробки помилки завантаження фото самим браузером
  const handleImageError = event => {
    event.target.src = defaultImage;
  };

  return (
    <div className={css.imageBox}>
      <img
        src={avatar || defaultImage}
        alt="Avatar"
        width="48"
        // Обробник помилки завантаження
        onError={handleImageError}
      />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? `Online` : `Offline`}
      </p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
