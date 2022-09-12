import PropTypes from 'prop-types'
import css from './Statistics.module.css'


export default function Statistics (props) {
    const { statsLabel, statsPercentage } = props;
    return (    
        <>
            <span className={css.label}>{statsLabel}</span>
            <span className={css.percentage}>{statsPercentage}</span>
        </>
    )
}

Statistics.propTypes = {
    statsLabel: PropTypes.string.isRequired,
    statsPercentage: PropTypes.number.isRequired
}

Statistics.defaultProps = {
  title: '',
  label: 'format',
};