import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import {FeedbackImg} from './FeedbackImg/FeedbackImg';
import css from './styles/styles.module.css';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = evt => {
    if (evt === 'Good') {
      setGood(good + 1);
    } else if (evt === 'Neutral') {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return (total === 0) ? 0 : Math.round((good / total) * 100);
  };

  return (
      <div className={css.container}>
        <FeedbackImg />
        <div className={css.containerFeedbackStyles}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['Good', 'Neutral', 'Bad']}
              onLeaveFeedback={handleFeedback}
            />
          </Section>

          <Section
            title="Statistics"> {
              countTotalFeedback() === 0 ? 
              <Notification message="There is no feedback"></Notification>
              : <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            }
          </Section>
        </div>
      </div>
    );
};
