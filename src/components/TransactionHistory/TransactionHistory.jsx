import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableTitle}>
        <tr>
          <th className={css.itemTh}>Type</th>
          <th className={css.itemTh}>Amount</th>
          <th className={css.itemTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.item} key={id}>
            <td className={css.itemTd}>{type}</td>
            <td className={css.itemTd}>{amount}</td>
            <td className={css.itemTd}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
