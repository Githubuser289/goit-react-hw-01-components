import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics.jsx';
import statsData from './Statistics/data.json';

import FriendList from './FriendList/FriendList.jsx';
import friendsData from './FriendList/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactionsData from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
