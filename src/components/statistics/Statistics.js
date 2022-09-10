import PropTypes from 'prop-types'


export default function Statistics (props) {
    const { statsLabel, statsPercentage } = props;
    return (    
        <>
            <span className="label">{ statsLabel}</span>
            <span className="percentage">{ statsPercentage}</span>
        </>
    )
}

Statistics.propTypes = {
    statsLabel: PropTypes.string.isRequired,
    statsPercentage: PropTypes.number.isRequired
}