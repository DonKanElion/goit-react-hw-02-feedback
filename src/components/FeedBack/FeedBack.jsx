// import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './FeedBack.module.css';

export const FeedBack = () => {

    return (
        <div className="container">

        <h2 className={classNames(s.title)}>Please leave feedback 👇</h2>

        <div className={classNames(s.box)}>
            <button type="button" className={classNames(s.button, s.btn_good)}>Good</button>
            <button type="button" className={classNames(s.button)}>Neutral</button>
            <button type="button" className={classNames(s.button, s.btn_bad)}>Bad</button>
        </div>
    
        </div>
     
    )
}