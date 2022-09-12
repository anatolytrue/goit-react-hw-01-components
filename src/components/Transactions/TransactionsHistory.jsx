import PropTypes from 'prop-types'
import css from './Transactions.module.css'
import TransactionsItem from './TransactionsItem'

function TransactionsHistory({ transactions }) {
    // console.log(transactions)
    return (
        <table className={css.transactionTable} >
            <thead className={css.transactionHead}>
                <tr>
                <th className={css.transactionHeadRow}>Type</th>
                <th className={css.transactionHeadRow}>Amount</th>
                <th className={css.transactionHeadRow}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.transactionBody}>
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