import { Profile } from './profile/profile.jsx';
import { Statistics } from './statistics/statistics.jsx';
import {FriendList} from './friendList/friendlist.jsx';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import {TransactionHistory} from './transactionHistory/transactionhistory.jsx';
export const App = () => {
  return (
    <div className="profile">
      <Profile user={user} />
       <Statistics title="Upload stats" stats={data} />
       <FriendList title="Friends" friends={friends} />
       <TransactionHistory title="Transation History" items={transactions}/>
    </div>
  );

};