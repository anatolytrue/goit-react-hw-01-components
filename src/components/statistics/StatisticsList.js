import PropTypes from 'prop-types'
import Statistics from './Statistics'

function StatisticsList({items}) {
    return (
        <>
        <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {items.map(item => (
                    <li key={item.id}>
                        <Statistics
                            statsLabel={item.label}
                            statsPercentage={item.percentage}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default StatisticsList