// import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return ( 
        <div className="container">
         <h2 className={classNames(s.comp_title)}>Statistics</h2>

            <ul className={classNames(s.list)}>
                <li className={classNames(s.item)}>Good: {good}</li>
                <li className={classNames(s.item)}>Neutral: {neutral} </li>
                <li className={classNames(s.item)}>Bad:  {bad}</li>
                <li className={classNames(s.item)}>Total: {total} </li>
                <li className={classNames(s.item)}>Positive feedbasck: {positivePercentage} %</li>
            </ul>

        </div>
    )
}

// Statistics.PropTypes({
//     good: PropTypes.number.isRequered,
// })

export default Statistics;