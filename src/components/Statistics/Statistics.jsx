// import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Statistics.module.css';


export const Statistics = () => {

    return ( 
        <div className="container">
        <h2 className={classNames(s.comp_title)}>Statistics</h2>

        <ul className={classNames(s.list)}>
            <li className={classNames(s.item)}>Good: 4 </li>
            <li className={classNames(s.item)}>Neutral: 4</li>
            <li className={classNames(s.item)}>Bad:  1</li>
            <li className={classNames(s.item)}>Total: 000  </li>
            <li className={classNames(s.item)}>Positive feedbasck: </li>
        </ul>

        </div>
    )
}