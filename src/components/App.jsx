import { FeedBack } from '../components/FeedBack';
import { Statistics } from '../components/Statistics';

export const App = () => {
  return (
    <div className='container'
      style={{
        display: 'block',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#010101',
      }}
    >
      <h1>React 🛠 homework template 🙀</h1>

      <FeedBack />

      <Statistics />
      
    </div>
  );
};
