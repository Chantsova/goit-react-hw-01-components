import './transactionHistory.css';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <table className="TransactionHistory">
      <thead className="TransactionHistory__header">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className="TransactionHistory__type">{item.type}</td>
            <td className="TransactionHistory__count">{item.amount}</td>
            <td className="TransactionHistory__count">{item.currency}</td>
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
    }),
  ),
};

export default TransactionHistory;
