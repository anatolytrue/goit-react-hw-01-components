import PropTypes from 'prop-types'
import TransactionsItem from './TransactionsItem'

function TransactionsHistory({ transactions }) {
    console.log(transactions)
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <TransactionsItem
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency}                        
                        />
                    </tr>)
                    )
                }
            </tbody>
        </table>
    )
}

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default TransactionsHistory