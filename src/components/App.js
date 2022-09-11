import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import Section from './Section';
import StatisticsList from './Statistics/StatisticsList';
import Profile from './Profile/Profile'
import FriendsList from './FriendsList/FriendsList';
import TransactionsHistory from './Transactions/TransactionsHistory';

export default function App () {
  return (
    <div
      style={{
        height: '50%',
        width: '100wh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10,
        color: '#010101'
      }}
    >
      <Section title="First task">
        <Profile
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          statsFollowers={user.stats.followers}
          statsViews={user.stats.views}
          statsLikes={user.stats.likes}
        />
      </Section>
      
      <Section title="Second task">
        <StatisticsList title="Upload stats" items={data}/>
      </Section>

      <Section title="Third task">
        <FriendsList friends={friends} />
      </Section>

      <Section title="Forth task">
        <TransactionsHistory transactions={transactions}/>
      </Section>
      
    </div>
  );
};