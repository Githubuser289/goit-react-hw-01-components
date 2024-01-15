import PropTypes from 'prop-types';
import { TransactionHistoryTable } from './TransactionHistory.styled.jsx';

var flag = true;

function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <Transaction data={item} key={item.id} />
        ))}
      </tbody>
    </TransactionHistoryTable>
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
  ),
};

function Transaction({ data }) {
  const color = flag ? 'blue' : 'darkred';
  flag = !flag;
  return (
    <tr key={data.id} style={{ color: color }}>
      <td>{data.type}</td>
      <td>{data.amount}</td>
      <td>{data.currency}</td>
    </tr>
  );
}
Transaction.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
export default TransactionHistory;
