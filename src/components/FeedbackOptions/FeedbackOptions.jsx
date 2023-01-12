import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(key => {
    return (
      <li key={key}>
        <button
          type="button"
          name={key}
          onClick={onLeaveFeedback}
          className={classNames(s.button)}
        >
          {key}
        </button>
      </li>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
