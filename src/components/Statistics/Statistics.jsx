import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Statistics.module.css';
import Notification from 'components/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total > 0 ? (
    <ul className={classNames(s.list)}>
      <li className={classNames(s.item)}>Good: {good}</li>
      <li className={classNames(s.item)}>Neutral: {neutral} </li>
      <li className={classNames(s.item)}>Bad: {bad}</li>
      <li className={classNames(s.item)}>Total: {total} </li>
      <li className={classNames(s.item)}>
        Positive feedbasck: {positivePercentage} %
      </li>
    </ul>
  ) : (
    <Notification message="There is no feedback"></Notification>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
