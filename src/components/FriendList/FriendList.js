import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList() {
  <ul>
    {/* Кількість li залежить від кількості об'єктів в масиві */}
    <li>
      <FriendListItem />
    </li>
  </ul>;
}

export default FriendList;
