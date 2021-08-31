import './App.css';
import Section from './components/Section';
import Profile from './components/profile/profile';
import FriendsList from './components/friendsList/friendsList';
import Statistics from './components/statistics/statistics';
import TransactionHistory from './components/transactionHistory/transactionHistory';
import user from './components/profile/user.json';
import friends from './components/friendsList/friends.json';
import statisticalData from './components/statistics/statistical-data.json';
import transactions from './components/transactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>

      <Section class="Section" title="Upload stats">
        <Statistics stats={statisticalData} />
      </Section>

      <Section>
        <FriendsList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}
