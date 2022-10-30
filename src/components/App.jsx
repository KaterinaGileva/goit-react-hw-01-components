import { Profile } from './Profile/Profile';

import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './FriendList/FriendList.jsx';
import { TransactionHistory } from './Transaction/TransactionHistory.jsx';
import css from '../components/App.module.css';

import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './Transaction/transactions.json';

export const App = () => {
  return (
    <div className={css.container}>
  <Profile />
  <Statistics title="Upload stats" stats={data} />
  <Statistics stats={data} />
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />
</div>
  );
 };

 /*export const App = () => {
 return (
   <div
     style={{
       height: '100vh',
       display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
       color: '#010101'
     }}
   >
      React homework template

    
    
   </div>
 );
};*/