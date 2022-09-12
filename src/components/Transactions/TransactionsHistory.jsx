import PropTypes from 'prop-types'
import TransactionsItem from './TransactionsItem'
import css from './Transactions.module.css'


function TransactionsHistory({ transactions }) {
    return (
        <table className={css.transactionHistory}>
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