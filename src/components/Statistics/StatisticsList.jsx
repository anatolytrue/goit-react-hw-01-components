import PropTypes from 'prop-types'
import Statistics from './Statistics'
import css from './Statistics.module.css'

function StatisticsList({ title, items }) {
    return (
        <div className={css.statistics}>
            {title && <h2 className={css.title}>{ title}</h2>}
            <ul className={css.statList}>
                {items.map(item => (
                    <li key={item.id} className={css.item}>
                        <Statistics
                            statsLabel={item.label}
                            statsPercentage={item.percentage}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
    title: PropTypes.string
}

export default StatisticsList;