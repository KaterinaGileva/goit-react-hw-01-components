import {Profile} from './Profile/Profile';
import {StatsTitle} from './Statistics/StatsTitle';
import {StatsList} from './Statistics/StatsList';
import {FriendList} from './FriendList/FriendList.jsx';
import {TransactionTable} from './Transaction/TransactionTable.jsx';
//import {TransactionTitle} from './Transaction/TransactionTitle.jsx';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './Transaction/transactions.json';

//import { Statistics } from './Statistics/Statistics';


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

    <Profile />
    
   </div>
 );
};*/

export const App = () => {
  return (
    <div className="App">
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<StatsTitle /*title="Upload stats"*/  />
<StatsList stats={data} />
<FriendList friends={friends} />;

<TransactionTable items={transactions} />;
</div>
  );
 };