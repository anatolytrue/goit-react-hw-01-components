import PropTypes from 'prop-types'
// import css from './Transactions.module.css'

function TransactionsItem(props) {
    const { type, amount, currency } = props;
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
        
    )
    
}

TransactionsItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

export default TransactionsItem