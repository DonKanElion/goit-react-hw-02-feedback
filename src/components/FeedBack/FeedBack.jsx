import { Component } from "react";
// import PropTypes from 'prop-types';

import classNames from 'classnames';
import s from './FeedBack.module.css';

import Statistics from '../Statistics';


export class FeedBack extends Component {
    // static ptopTypes = {
    //     good: PropTypes.number,
    // }

    state = {
        good: 3,
        neutral: 2,
        bad: 3,
        total: 7,
        positivePercentage: 43,
      }

    hundleClick (evt) {
        let name = evt.target.name;

        this.setState((prevState) => {
            const { good, neutral, bad, total } = prevState;

            return { 
                [name]: prevState[name] + 1,
                total: prevState.total = good + neutral + bad,
                positivePercentage: prevState.positivePercentage = good / total,
                };
        });
    };

    // countTotalFeedback() // Крок 2 закальна кількість відгуків
    // countPositiveFeedbackPercentage()  // Крок 2 % позитивних відгуків (обчислювальні дані)

    render() {
        const { good, bad, neutral, total, positivePercentage } = this.state;

        return (
            <div className="container">
    
            <h2 className={classNames(s.title)}>Please leave feedback 👇</h2>
    
                <div className={classNames(s.box)}>
                    <button type="button" name="good"  onClick={this.hundleClick.bind(this)} className={classNames(s.button, s.btn_good)}>Good</button>
                    <button type="button" name="neutral" onClick={this.hundleClick.bind(this)} className={classNames(s.button)}>Neutral</button>
                    <button type="button" name="bad" onClick={this.hundleClick.bind(this)} className={classNames(s.button, s.btn_bad)}>Bad</button>
                </div>


                <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>
        
            </div>
        )

    }
    
}